import { useReducer } from "react";
import ShoppingContext from "./ShoppingContext";
import ShoppingReducer from "./ShoppingReducer";
import { SaveBasketToStorage, GetBasketFromStorage } from "../Helpers/localstorage";


const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(ShoppingReducer, initialState);

  // Selectors
  const getBasketTotal = (basket) => {
     basket?.reduce((amount, item) => item.price + amount, 0);
  };

  const addToBasket = async ({item}) => {
    dispatch({

      type: "ADD_TO_BASKET",
      payload: item,
    });
    SaveBasketToStorage(state.basket);
  };

const getBasket = () => {
  dispatch({
type: "SET_TO_BASKET",
payload: GetBasketFromStorage(),

})}


  const removeFromBasket = (item) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: item,
    });
  }

  const setUser = (user) => { // Fixed typo in function name
    dispatch({ // Added curly braces to create an object for dispatch
      type: "SET_USER", // Fixed typo in action type
      payload: user,
    });
  };

  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
        getBasket,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingState;
