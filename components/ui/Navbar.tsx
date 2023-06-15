import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React, { useContext } from 'react'
import { UIContext } from '../../context/ui';

export const Navbar = () => {
  const {openSideMenu} = useContext(UIContext);
  return (
    <AppBar position='sticky' >
        <Toolbar>
            <IconButton onClick={openSideMenu} aria-label="" size='large' edge="start">
                <MenuOutlinedIcon/>
            </IconButton>
            <Typography variant='h6'>PainJira</Typography>
        </Toolbar>

    </AppBar>
  )
}
