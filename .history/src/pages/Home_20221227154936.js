import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <section className='section'>
      <Header />
      <Navbar />
        <Outlet />
      <Footer />
    </section>
    </>
  );
};
export default Home;
