import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page is shared</h2>
      <Outlet />
      <Link to='/about' className='btn'> About </Link>
    </section>
  );
};
export default Home;
