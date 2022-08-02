import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

export const MuiSwitch = () => {

    const [checked, setChecked] = useState('')
    const handleChange =(event, newSwitch)=>{
        setChecked(newSwitch)
        console.log("result", newSwitch)
    }
  return (
    
    <Box>
        <FormControlLabel  control={<Switch />} value={checked} onChange={handleChange} />
    </Box>
  )
}
