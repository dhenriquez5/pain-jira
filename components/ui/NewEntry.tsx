import { Button, Box, TextField } from '@mui/material';
import React, { ChangeEvent, useContext, useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
    const {addNewEntry} = useContext(EntriesContext)
    const {isAddingEntry,setIsAddingEntry} = useContext(UIContext);
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSave = () => {
        if (inputValue.length === 0) return;
        addNewEntry(inputValue)
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {
                isAddingEntry &&
                (
                    <>
                        <TextField value={inputValue} onChange={handleChange}
                            fullWidth sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder="Nueva entrada"
                            error={inputValue.length <= 0 && touched}
                            autoFocus multiline label="Nueva Entrada"
                            onBlur={() => setTouched(true)}
                            helperText={inputValue.length <= 0 && touched ? "Campo Requerido" : ""} />
                        <Box display='flex' justifyContent='space-between'>
        
                            <Button variant='text' onClick={() => {setIsAddingEntry(false);setInputValue('')}}  >Cancelar</Button>
                            <Button variant='outlined' color="secondary" endIcon={<SaveOutlinedIcon />} onClick={handleSave} >Guardar</Button>
                        </Box>
                    </>
                )
            }
            {
                !isAddingEntry && (
                    <Button onClick={() => setIsAddingEntry(true)} fullWidth variant='outlined' color="secondary" startIcon={<AddCircleOutlineOutlinedIcon />} >Agregar Tarea</Button>

                )
            }


        </Box>
    )
}
