import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../store/wishlistActions';
import Header from './Header';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function Home() {
  const [productList, setProductList] = useState([]);
  const [wishlistState, setWishlistState] = useState({});
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlist);

  useEffect(() => {
    axios.get("http://localhost:4000/Products")
      .then(res => {
        setProductList(res.data);
      });
  }, []);

  useEffect(() => {
    const initialWishlistState = productList.reduce((acc, product) => {
      acc[product.id] = wishlist.some(w => w.id === product.id);
      return acc;
    }, {});
    setWishlistState(initialWishlistState);
  }, [productList, wishlist]);

  const handleWishlistToggle = (product) => {
    if (wishlistState[product.id]) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
    setWishlistState(prevState => ({
      ...prevState,
      [product.id]: !prevState[product.id],
    }));
  };

  return (
    <div className="container">
      <Header />


      <div className="hero-section text-center my-5" style={{
    backgroundImage: 'url("https://img.freepik.com/free-photo/front-view-woman-holding-shopping-bags-with-copy-space_23-2148684545.jpg?t=st=1726170493~exp=1726174093~hmac=b0974c3d3a628bd1f9e4042bdac7cb5428ecbb658faaf3eafaf88731f8eda9a2&w=1060")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0',
    color: '#fff'
}}>
  <h2>Grab Up to 50% Off On Selected Headphones</h2>
  <button className="btn btn-dark mt-3">Buy Now</button>
</div>



      <div className="row">
        {productList.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <Link to={`/products/${product.id}`}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
              </div>
              <i
                onClick={() => handleWishlistToggle(product)}
                className={`bi bi-heart${wishlistState[product.id] ? '-fill text-danger' : ''}`}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
