import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedProductLayout = () => {
  return (
   <>
    <h2>Shared Product Layout</h2>
    
     <Outlet />
   </>
  )
}

export default SharedProductLayout