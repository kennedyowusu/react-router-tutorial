import { Link } from "react-router-dom";
import data from '../data';

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        {
          data.map((product) => {
            const { id, name, image } = product;
            return (
              <Link to={`/products/${id}`} key={id} className='product'>
                <img src={image} alt={name} /> 
              </Link>
            );
          })  
        }
        <Link to='/' className='btn'> Home </Link>
      </section>
    </>
  );
};

export default Products;
