import { MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const MuiSelect = () => {

    const [business, setBusiness] = useState()

    const [country, setCountry] = useState()

    const selectCountry =(event, newCountry)=>{
        setCountry(newCountry)
    }

    const handleBusiness =(event, newbusiness)=>{
        setBusiness(newbusiness)
    }
  return (
    
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <Select value={business} onChange={handleBusiness} displayEmpty >
            <MenuItem disabled>selected one business</MenuItem>
                <MenuItem value='1'>business</MenuItem>
                <MenuItem value='2'>contact us</MenuItem>
                <MenuItem value='3' ><Link to='about' >sell on costbo</Link></MenuItem>
                <MenuItem value='4'>profile</MenuItem>
            </Select>
        </Stack>

        <Stack>
            <TextField label='select country' select value={country} onChange={selectCountry}>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Austrila</MenuItem>
            </TextField>
        </Stack>
    </Stack>
  )
}
