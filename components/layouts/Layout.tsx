import { Box } from '@mui/material'
import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar'
import { SideBar } from '../ui/SideBar'

interface Props {
    title?: string,
    children?: React.ReactNode
}
export const Layout:FC<Props> = ({title='PainJira',children}) => {
  return (
    <Box sx={{flexGrow:1}} >
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar/>
        <SideBar/>
        <Box sx={{padding:'10px 20px'}}>
            {children}
        </Box>
    </Box>
  )
}
