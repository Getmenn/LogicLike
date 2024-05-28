import { useLogicBlok } from '@/shared/hooks/useLogicBlok';

import { SidebarItem } from '../sidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
    const { tags, activeTag, setActiveTag } = useLogicBlok();

    return (
        <nav className={s.sidebar}>
            <ul>
                {tags.map((item, index) => (
                    <SidebarItem
                        name={item}
                        activeTag={activeTag === item}
                        setActiveTag={setActiveTag}
                        key={index}
                    />
                ))}
            </ul>
        </nav>
    );
};
