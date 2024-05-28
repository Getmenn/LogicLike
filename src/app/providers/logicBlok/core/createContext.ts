import { createContext } from 'react';

import { ILogicBlock } from '@/entities/logicBlocks/type/type';

interface IContext {
    tags: string[];
    activeTag: string;
    blocks: ILogicBlock[];
    activeBlocks: ILogicBlock[];
    setActiveTag: (name: string) => void;
    // tags,
    // activeTag,
    // blocks,
    // activeBlocks,
}

const defaultValues: IContext = {
    tags: [],
    activeTag: '',
    blocks: [],
    activeBlocks: [],
    setActiveTag: () => { },
    // tags,
    // activeTag,
    // blocks,
    // activeBlocks,
};

export const LogicBlok = createContext<IContext>(defaultValues);
