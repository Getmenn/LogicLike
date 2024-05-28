import { memo } from 'react';

import { useLogicBlok } from '@/shared/hooks/useLogicBlok';

import { LogicBlock } from '../logicBlock/LogicBlock';
import s from './LogicList.module.scss';

export const LogicList = memo(() => {
    const { activeBlocks } = useLogicBlok();

    return (
        <ul className={s.list}>
            {activeBlocks.map((el) => (
                <LogicBlock key={el.id} item={el} />
            ))}
        </ul>
    );
});
