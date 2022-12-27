import React from 'react'

const SharedLayout = () => {
  return (
    <>
      <section className='section'>
      <Header />
      <Navbar />
        <Outlet />
      <Footer />
    </section>
    </>
  )
}

export default SharedLayout
