import { GET_LIST_PRODUCTS, GET_LIST_PRODUCTS_SUCCESS } from "../types/productType"


   const initialState = {
    products: [ ],
    error: null
}
  
  // eslint-disable-next-line
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case GET_LIST_PRODUCTS:
        return {
          ...state,
        };

      case GET_LIST_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload
        };
  
      default:
        return state;
    }
  }
  