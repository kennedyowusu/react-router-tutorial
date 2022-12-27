import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <section className='section'>
      <Header />
      <Navbar />
      <Outlet />
      <Link to='/about' className='btn'> About </Link>
    </section>
  );
};
export default Home;
