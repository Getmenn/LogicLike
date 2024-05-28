import { memo } from 'react';

import { ILogicBlock } from '../../type/type';
import s from './LogicBlock.module.scss';

interface IProps {
    item: ILogicBlock
}

export const LogicBlock = memo(({ item }: IProps) => {
    return (
        <li className={s.item}>
            <div className={s.imageWrapper} style={{ backgroundColor: item.bgColor }}>
                <img className={s.image} src={item.image} alt={item.name} />
            </div>
            <span className={s.name}>{item.name}</span>
        </li>
    );
});
