import { FC, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState{
    sidebarStatus: boolean;
    isAddingEntry: boolean;
}
interface Props{ 
    children?:React.ReactNode;
}
const UI_initialState:UIState ={
    sidebarStatus:false,
    isAddingEntry:false,
}


export const UIProvider:FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, UI_initialState);

    const openSideMenu = ()=>{
        dispatch({type:'UI-OpenSidebar'});
    }
    const closeSideMenu = ()=>{
        dispatch({type:'UI-CloseSidebar'});
    }

    const setIsAddingEntry = (isAddingEntry:boolean)=>{
        dispatch({type:'UI-AddEntry',payload:isAddingEntry});
    }



    return (
        <UIContext.Provider value={{...state, openSideMenu, closeSideMenu,setIsAddingEntry}}>
            {children}
        </UIContext.Provider>
    )
}