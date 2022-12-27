import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  
  return (
    <section className='section product'>
      <h2>The product ID is { productId}</h2>
      <Link to='/products' className='btn'> back to products</Link>
    </section>
  );
};

export default SingleProduct;
