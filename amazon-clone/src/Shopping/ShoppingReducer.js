export const shoppingContext = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload]
      }

case "REMOVE_FROM_BASKET":
  const index = state.basket.findIndex((basketItem) => basketItem.id === action.payload.id);
  let newBasket = [...state.basket];

  if (index >= 0) {
    newBasket.splice(index, 1);
  } else {
    console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in the basket!`);
  }
  
  return {
    ...state,
    basket: newBasket
  };

      

        case "EMPAITY_BASKET":
          return {
  
            ...state,
            user:action.payload
          }


      case "SET_USER":
        return {

          ...state,
          basket:[],
        }

    default:
      return state;

  }
}

export default shoppingContext;