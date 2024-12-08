export const addToWishlist = (movie) => {
    return {
      type: 'ADD_TO_WISHLIST',
      payload: movie,
    };
  };


export const removeFromWishlist = (movieId) => {
    return {
      type: 'REMOVE_FROM_WISHLIST',
      payload: movieId,
    };
  };
  
  