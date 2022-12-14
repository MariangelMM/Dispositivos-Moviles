import { GET_LIST_PRODUCTS, GET_LIST_PRODUCTS_SUCCESS, GET_DETAIL_PRODUCT, GET_DETAIL_PRODUCT_SUCCESS } from "../types/productType"


   const initialState = {
    products: [ ],
    detailProduct: {},
    error: null
}
  
  // eslint-disable-next-line
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case GET_LIST_PRODUCTS:
      case GET_DETAIL_PRODUCT:
        return {
          ...state,
        };

      case GET_LIST_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload
        };
        
          case GET_DETAIL_PRODUCT_SUCCESS:
          return {
            ...state,
            detailProduct: action.payload
          };
  
      default:
        return state;
    }
  }
  