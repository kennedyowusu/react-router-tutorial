import { useParams, Link } from "react-router-dom";
import data from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId);

  const prod = data.find((product) => product.id === (productId));

  const { id, name, image } = prod;
  
  return (
    <section className='section product'>
      <h2>The product ID is {id}</h2>
      <h2>{name}</h2>
      <img src={image || 'https://via.placeholder.com/150'} alt={name} />
      <Link to='/products' className='btn' style={{ marginTop: '5rem' }}> back to products</Link>
    </section>
  );
};

export default SingleProduct;
