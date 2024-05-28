import MainPage from '@/page/content/main';

import { LogicBlokProvider } from './providers/logicBlok';

export const App = () => {
    return (
        <LogicBlokProvider>
            <MainPage />
        </LogicBlokProvider>
    );
};
