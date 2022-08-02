import React from 'react'
import {Link} from 'react-router-dom'

function First() {
  return (
    <div className='popular-stores'>
        <h2>Socially Popular Stores</h2>
    <div className='header-box'>
        <nav className='small-box'>
         <h2>first button</h2>
         <Link to ='/' target="_blank">home</Link>
        </nav>
        <div className='small-box'>
        <h2>second button</h2>
        <Link to ='https://www.google.co.in/maps' target="_blank" > google map</Link>
        </div>
        <div className='small-box'>
        <h2>third button</h2>
        </div>
    </div>
        
    </div>
  )
}

export default First