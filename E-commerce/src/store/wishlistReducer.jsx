const loadState = () => {
  try {
    const serializedState = localStorage.getItem('wishlist');
    if (serializedState === null) {
      return { wishlist: [] }; 
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state', err);
    return { wishlist: [] }; 
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('wishlist', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};

const initialState = loadState();

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const newStateAdd = {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
      saveState(newStateAdd);
      return newStateAdd;
    }

    case "REMOVE_FROM_WISHLIST": {
      const newStateRemove = {
        ...state,
        wishlist: state.wishlist.filter((movie) => movie.id !== action.payload),
      };
      saveState(newStateRemove);
      return newStateRemove;
    }

    default:
      return state;
  }
};

export default wishlistReducer;
