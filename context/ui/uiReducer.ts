import { UIState } from './UIProvider'

type UIType =
    | { type: 'UI-OpenSidebar', }
    | { type: 'UI-CloseSidebar', }
    | { type: 'UI-AddEntry', payload:boolean}

export const uiReducer = (state: UIState, action: UIType): UIState => {

    switch (action.type) {
        case 'UI-OpenSidebar':
            return {
                ...state,
                sidebarStatus: true
            }
        case 'UI-CloseSidebar':
            return {
                ...state,
                sidebarStatus: false
            }
        case 'UI-AddEntry':
            return{
                ...state,
                isAddingEntry:action.payload
            }
        default:
            return state;
    }

}