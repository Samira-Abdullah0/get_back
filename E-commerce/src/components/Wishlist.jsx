import { useSelector } from 'react-redux';
import Header from './Header';

function Wishlist() {
  const wishlist = useSelector(state => state.wishlist.wishlist);

  return (
    <div style={{ backgroundColor: "black",height:"400vh" }} className="align-items-center justify-content-center text-center">
      <Header />
      <h2 style={{ color: "white" }}>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p style={{ color: "white" }}>No movies in wishlist</p>
      ) : (
        wishlist.map(movie => (
          <div key={movie.id} style={{ display: 'inline-block', margin: "10px" }}>
            <img
              style={{ width: "450px", height: "350px", borderRadius: "5px" }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
