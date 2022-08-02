import {NavLink} from 'react-router-dom'


export const Navbar = () => {

  const navLinkStyles =({isActive}) =>{
    return{
      fontWeight : isActive ? 'bold' : 'normal',
      textDecoration : isActive ? 'none' : 'underline',
    }
  }
  return (
    <nav className='navbar'>
      <NavLink style={navLinkStyles} to = '/' >Home </NavLink>
      <NavLink style={navLinkStyles} to = 'About' >About </NavLink>
      <NavLink style={navLinkStyles} to = 'product' >Product </NavLink>

    </nav>
  )
}
