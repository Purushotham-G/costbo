import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const MuiAutocomplete = () => {

    const skills = ['HTML' , 'CSS' , 'REACT-JS', 'MATERIAL-UI' , 'JAVASCRIPT']

    const [value, setValue] =useState('')
    const handledChanged =(event, newValue )=>{
        setValue(newValue)
        console.log("result", newValue  )
    }
  return (
    <>
    <Stack width='250px' spacing={2}>
        <Autocomplete options={skills} renderInput={(params)=> <TextField {...params} label='skill' />}   
            value={value} onChange={handledChanged}
        />
    </Stack>
    </>
  )
}
