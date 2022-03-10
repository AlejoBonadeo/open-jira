import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { UiContext } from '../../context/ui'

export const Navbar = () => {

  const { openSideBar } = useContext(UiContext)

  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton size="large" edge="start" onClick={openSideBar}>
                <MenuOutlinedIcon />
            </IconButton>
            <Typography variant="h6">OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
