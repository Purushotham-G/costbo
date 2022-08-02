import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiTextField = () => {

    const [conform, setConform] =useState('')

  return (
    
    <>
        <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined' required />
            <TextField label='second -name' variant='filled' />
            <TextField label='age' variant='filled' />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{startAdornment : <InputAdornment position='start'>$</InputAdornment>,}} />
            <TextField label='weight' InputProps={{endAdornment : <InputAdornment position='end'>kg</InputAdornment>,}} />
        </Stack>
        


        <Stack direction='row' spacing={2}>
            <TextField label='Name' required />
            <TextField label='second-Name' required />
            <TextField label='Age' required />
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='Password' required  value={conform} onChange={(e)=>setConform(e.target.value)} error={!conform}
                helperText={!conform? 'required':'do not share password wih anyone'}
            />
            
        </Stack>

        </Stack>

    </>
    
  )
}
