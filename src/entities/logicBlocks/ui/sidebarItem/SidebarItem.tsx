import classNames from 'classnames';
import { memo } from 'react';

import s from './SidebarItem.module.scss';

interface IProps {
    name: string;
    activeTag: boolean;
    setActiveTag: (name: string) => void;
}

export const SidebarItem = memo(({ name, activeTag, setActiveTag }: IProps) => {
    return (
        <li
            className={classNames(s.item, { [s.active]: activeTag })}
            onClick={() => setActiveTag(name)}
        >
            {name}
        </li>
    );
});
