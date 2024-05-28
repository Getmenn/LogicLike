import { useContext } from 'react';

import { LogicBlok } from '@/app/providers/logicBlok';

export const useLogicBlok = () => {
    const context = useContext(LogicBlok);
    if (!context) {
        throw new Error('useLogicBlok must be used within a LogicBlokProvider');
    }
    return context;
};
