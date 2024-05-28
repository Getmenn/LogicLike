import { createContext, useEffect, useMemo, useState } from 'react';

import { ILogicBlock } from '@/entities/logicBlocks/type/type';
import { getBlocks } from '@/shared/api/services/getBlocks';

import { LogicBlok } from '../core/createContext';

export const LogicBlokProvider = ({ children }: { children: React.ReactNode }) => {
    const [tags, setTags] = useState<string[]>([]);
    const [activeTag, setActiveTag] = useState<string>('Все темы');
    const [blocks, setBlocks] = useState<ILogicBlock[]>([]);
    const [activeBlocks, setActiveBlocks] = useState<ILogicBlock[]>([]);

    const fetchBlocks = async () => {
        const response: ILogicBlock[] = await getBlocks();
        let newTags: string[] = [];

        response.forEach((element) => {
            newTags = [...newTags, ...element.tags];
        });

        setTags(['Все темы', ...Array.from(new Set(newTags))]);
        setBlocks(response);
    };

    useEffect(() => {
        fetchBlocks();
    }, []);

    useEffect(() => {
        if (activeTag === 'Все темы') {
            setActiveBlocks(blocks);
        } else {
            setActiveBlocks(blocks.filter((block) => block.tags.includes(activeTag)));
        }
    }, [activeTag, blocks]);

    const LogicBlockValue = useMemo(() => ({
        tags,
        activeTag,
        blocks,
        activeBlocks,
        setActiveTag,
    }), [
        tags,
        activeTag,
        blocks,
        activeBlocks,
    ]);

    return (
        <LogicBlok.Provider
            value={LogicBlockValue}
        >
            {children}
        </LogicBlok.Provider>
    );
};
