import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext,EntriesReducer } from './';

export interface EntriesState{
    entries: Entry[];
}
const Entries_initialState:EntriesState ={
    entries:[
        {
            _id:uuidv4(),
            createdAt:Date.now(),
            description:"Pendiente Prueba Ssitemas",
            status:'pending'
        },
        {
            _id:uuidv4(),
            createdAt:Date.now() - 1000000,
            description:"Progreso Testing Jira",
            status:'in-progress'
        },
        {
            _id:uuidv4(),
            createdAt:Date.now()-100000 ,
            description:"Terminada Testing Jira",
            status:'finished'
        },
    ]
}
interface Props{ 
    children?:React.ReactNode;
}


export const EntriesProvider:FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(EntriesReducer, Entries_initialState)

    const addNewEntry = (description:string)=>{
        const newEntry:Entry={
            _id:uuidv4(),
            createdAt:Date.now(),
            description,
            status:'pending'
        }

        dispatch({type:'Entry-Add-Entry',payload:newEntry});
    }

    return (
        <EntriesContext.Provider  value={{...state,addNewEntry}}>
            {children}
        </EntriesContext.Provider>
    )
}