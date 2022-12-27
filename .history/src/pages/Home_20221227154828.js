import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <section className='section'>
      <Header />
      <Navbar />
      <Outlet />
    </section>
    </>
  );
};
export default Home;
