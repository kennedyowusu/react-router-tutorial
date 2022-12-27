import React from 'react'

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
     <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/products'>Products</Link>
    </nav>
  )
}

export default StyledNavbar
