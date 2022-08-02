import React, { useState } from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio  } from '@mui/material'

export const MuiRadioButton = () => {


    const [label, setLabel] =useState('')

    const handlerChange =(event, setRadio)=> {
        setLabel(setRadio)
        console.log("years",setRadio)
    }

  return (
    <Box>
        <FormControl id='job-experences-group-label'>
            <FormLabel>years of experience</FormLabel>        
        </FormControl>
        <RadioGroup name='job-experences-group' aria-labelledby='job-experences-group-label' value={label} onChange={handlerChange} >
            <FormControlLabel control={<Radio />} value='0-2' label='0-2' />
            <FormControlLabel control={<Radio />} value='3-5' label='3-5' />
            <FormControlLabel control={<Radio />} value='5-10' label='5-10' />
        </RadioGroup>
    </Box>
  )
}
