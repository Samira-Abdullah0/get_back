import { createStore } from "redux";
import rootReducer from "./wishlistRootReducer";

const store = createStore(rootReducer);

export default store;
