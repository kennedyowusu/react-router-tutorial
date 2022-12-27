import React from 'react'
import { Outlet } from 'react-router-dom'
import StyledNavbar from '../components/StyledNavbar'

const SharedProductLayout = () => {
  return (
   <>
    <h2>Shared Product Layout</h2>

    <StyledNavbar />
     <Outlet />
   </>
  )
}

export default SharedProductLayout