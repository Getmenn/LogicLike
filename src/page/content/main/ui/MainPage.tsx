import { LogicList, Sidebar } from '@/entities/logicBlocks';
import { useLogicBlok } from '@/shared/hooks/useLogicBlok';

import s from './MainPage.module.scss';

export const MainPage = () => {
    const { blocks } = useLogicBlok();

    if (blocks.length === 0) {
        return (<h1>Loading...</h1>);
    }

    return (
        <main className={s.mainPage}>
            <div className={s.content}>
                <Sidebar />
                <LogicList />
            </div>
        </main>
    );
};
