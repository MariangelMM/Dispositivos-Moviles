import {
  GET_LIST_PRODUCTS,
  GET_LIST_PRODUCTS_SUCCESS,
  GET_DETAIL_PRODUCT,
  GET_DETAIL_PRODUCT_SUCCESS,
  POST_ADD_PRODUCT,
  POST_ADD_PRODUCT_SUCCESS,
} from "../types/productType";

const initialState = {
  products: [],
  detailProduct: {},
  productCard: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_PRODUCTS:
    case GET_DETAIL_PRODUCT:
    case POST_ADD_PRODUCT:
      return {
        ...state,
      };

    case GET_LIST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        detailProduct: action.payload,
      };

    case POST_ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        productCard:  [...state.productCard, action.payload]
      };

    default:
      return state;
  }
}
