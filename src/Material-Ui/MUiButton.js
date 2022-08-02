import React, { useState } from 'react'
import {Stack,Button, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'

function MUiButton() {
  const [formats, setFormats] = React.useState(()=>[]);

  const handleFormatChange =(event, newFormats) =>{
    console.log(newFormats)
      setFormats(newFormats)
  }
  return (
    <>
      {/* <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant ='text' href='https://www.w3schools.com/'>Text</Button>
          <Button variant ='contained'>contained</Button>
          <Button variant ='outlined'>outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='success'>Success</Button>
      </Stack>
      <Stack  spacing={2} display='block' direction="row">
        <Button variant='contained' size="small">Small</Button>
        <Button variant='contained' size='large'>Large</Button>
        <Button variant='contained' size='medium'>Medium</Button>
      </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <ButtonGroup variant='contained' orientation='vertical' size='medium' color='success'>
          <Button>left</Button>
          <Button>center</Button>
          <Button>Right</Button>
        </ButtonGroup>

      </Stack> */}

      <Stack direction='row'>
        <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
          <ToggleButton value='bold' aria-label='bold'>
             < FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'> 
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'> 
            <FormatUnderlinedIcon />
          </ToggleButton>

          <ToggleButton value='alignlefticon' aria-label='alignLefticon'>
          <FormatAlignLeftIcon />
        </ToggleButton>
        </ToggleButtonGroup>
       

      </Stack>

      

    </>
  )
}

export default MUiButton