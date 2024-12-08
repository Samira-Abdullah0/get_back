

import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/Products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
<div className="container my-5">
  <div className="row align-items-center">
    <div className="col-md-4">
      <img src={product.image} alt={product.title} className="img-fluid rounded" />
    </div>
    <div className="col-md-8">
      <h1 className="mb-3">{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> {product.price} USD</p>
      <p><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  </div>
</div>

  );
};

export default ProductDetails;
