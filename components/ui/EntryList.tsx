import { Paper, List } from '@mui/material';
import React, { FC, useContext, useMemo } from 'react'
import { EntriesContext } from '../../context/entries';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';

interface Props {
    status: EntryStatus,
}

export const EntryList: FC<Props> = ({ status }) => {
    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() =>
        entries.filter(entry => entry.status === status)
        , [entries]);

    console.log(entriesByStatus);
    console.log(entries);
    return (
        <div>
            <Paper sx={{ height: 'calc(100vh - 200px)', overflowY: 'auto', backgroundColor: 'transparent', padding: 1 }}>
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(e => (
                            <EntryCard key={e._id} entry={e} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}
