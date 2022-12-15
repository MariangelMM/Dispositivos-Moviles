import { getListProduct, getDetailProduct, postAddProduct } from "../../api/apiUrl";
import { message } from "antd";
import {
  GET_LIST_PRODUCTS,
  GET_LIST_PRODUCTS_SUCCESS,
  GET_DETAIL_PRODUCT,
  GET_DETAIL_PRODUCT_SUCCESS,
  POST_ADD_PRODUCT,
  POST_ADD_PRODUCT_SUCCESS,
} from "../types/productType";

export function listProductAction(idPeticion) {
  return async (dispatch) => {
    dispatch(listProduct());

    try {
      const response = await getListProduct();
      dispatch(listProductSuccess(response));
    } catch (error) {
      message.error("Error al tratar de obtener lista de productos!");
    }
  };
}

const listProduct = () => ({
  type: GET_LIST_PRODUCTS,
});

const listProductSuccess = (products) => ({
  type: GET_LIST_PRODUCTS_SUCCESS,
  payload: products,
});

export function detailProductAction(product) {
  return async (dispatch) => {
    dispatch(detailProduct());

    try {
      const response = await getDetailProduct(product.id);
      dispatch(detailProductSuccess(response));
    } catch (error) {
      message.error("Error al tratar de obtener producto!");
    }
  };
}

const detailProduct = () => ({
  type: GET_DETAIL_PRODUCT,
});

const detailProductSuccess = (product) => ({
  type: GET_DETAIL_PRODUCT_SUCCESS,
  payload: product,
});


export function addProductAction(dataProduct) {
  return async (dispatch) => {
    dispatch(addProduct());

    const dataProduct = [{
      id: 1,
      codeColor: 12,
      codeStorage: 22,
    }];
    dispatch(addProductSuccess(dataProduct));

    // try {
    //   const response = await postAddProduct(dataProduct);
    //   dispatch(addProductSuccess(response));
    // } catch (error) {
    //   message.error("Seleccione color y almacenamiento");
    // }
  };
}

const addProduct = () => ({
  type: POST_ADD_PRODUCT,
});

const addProductSuccess = (product) => ({
    type: POST_ADD_PRODUCT_SUCCESS,
  payload: product,
});
