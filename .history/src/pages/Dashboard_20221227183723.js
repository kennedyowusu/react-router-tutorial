const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h4>Dashboard</h4>
      <h5>{user.name}</h5>
    </section>
  );
};
export default Dashboard;
