import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StyledNavbar from '../components/StyledNavbar';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledNavbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout
