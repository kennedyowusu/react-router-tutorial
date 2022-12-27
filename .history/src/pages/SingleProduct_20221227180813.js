import { useParams, Link } from "react-router-dom";
import data from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId);

  const product = data.find((product) => product.id === parseInt(productId));
  const { name, image, id } = product;
  
  return (
    <section className='section product'>
      <h2>The product ID is { id}</h2>
      <Link to='/products' className='btn'> back to products</Link>
    </section>
  );
};

export default SingleProduct;
