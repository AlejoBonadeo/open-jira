import { createContext } from 'react';

interface UiContextProps {
    isMenuOpen: boolean;
    openSideBar: () => void;
    closeSideBar: () => void;
};

export const UiContext = createContext({} as UiContextProps);
