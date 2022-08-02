import React from 'react'
import { Link, Outlet} from 'react-router-dom'


export const Product = () => {
  return (
      <>
    <div className='navbar1'>
        <input type="text" placeholder="Search products" />
        
    </div>
    <nav className='nav1'>
        <Link to ='feature'>Feature</Link>
        <Link to ='new'>New</Link>
        </nav>
        <Outlet />
    </>
    
  )
}
