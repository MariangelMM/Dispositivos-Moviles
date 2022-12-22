import {
  GET_LIST_PRODUCTS,
  GET_LIST_PRODUCTS_SUCCESS,
  SET_LIST_PRODUCTS,
  SET_LIST_PRODUCTS_SUCCESS,
  GET_DETAIL_PRODUCT,
  GET_DETAIL_PRODUCT_SUCCESS,
  POST_ADD_PRODUCT,
  POST_ADD_PRODUCT_SUCCESS,

} from "../types/productType";

const initialState = {
  products: [],
  detailProduct: {},
  productCard: [],
  listProductSearch: [],
  totalProduct: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_PRODUCTS:
    case GET_DETAIL_PRODUCT:
    case POST_ADD_PRODUCT:
      case SET_LIST_PRODUCTS:
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

      case SET_LIST_PRODUCTS_SUCCESS:
        return {
          ...state,
          listProductSearch: action.payload,
        };

    case POST_ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        productCard:  [...state.productCard, action.payload],
      };

    default:
      return state;
  }
}
