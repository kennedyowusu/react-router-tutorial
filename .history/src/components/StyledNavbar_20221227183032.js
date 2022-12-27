import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
    <NavLink to='/' style={(isActive) => {
      return {
        color: isActive ? 'red' : 'black',
        fontWeight: isActive ? 'bold' : 'normal',
      }
    }}>Home</NavLink>
    
     <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </nav>
  )
}

export default StyledNavbar
