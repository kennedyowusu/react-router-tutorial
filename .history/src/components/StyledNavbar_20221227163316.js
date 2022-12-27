import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
    <NavLink to='/' style={(isActive) => {
      return {
        color: isActive ? 'teal' : 'black',
        fontWeight: isActive ? 'bold' : 'normal',
      }
     }}>Home</NavLink>
     <NavLink to='/about'>About</NavLink>
     <NavLink to='/products'>Products</NavLink>
    </nav>
  )
}

export default StyledNavbar
