import { createContext } from 'react';

interface ContextProps {
    sidebarStatus: boolean;
    closeSideMenu: () => void;
    openSideMenu: () => void;
    isAddingEntry:boolean;
    setIsAddingEntry:(isAddingEntry:boolean) => void;
}

export const UIContext = createContext({} as ContextProps);