import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const MuiToolBar = () => {
  return (
    <>
        <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6'component='div' sx={{flexGrow :1}}>costbo</Typography>

            <Stack direction='row' spacing={2}>
            <Button color='inherit'>Feature</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Contact</Button>
            <Button color='inherit'>Help</Button>
        </Stack>
        </Toolbar>
        
        </AppBar>
    </>
  )
}
