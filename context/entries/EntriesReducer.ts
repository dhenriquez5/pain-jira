import { Entry } from '../../interfaces';
import { EntriesState } from './EntriesProvider'

type EntriesType = 
|{ type: 'Entry-Add-Entry',payload:Entry}

export const EntriesReducer =(state:EntriesState, action:EntriesType): EntriesState => {

    switch (action.type) {
        case 'Entry-Add-Entry':
            return { 
                ...state,
                entries:[...state.entries, action.payload]
            }
        default:
            return state;
    }

}