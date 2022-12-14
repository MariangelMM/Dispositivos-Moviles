
import { getListProduct, getDetailProduct } from "../../api/apiUrl";
import { message } from "antd";
import { GET_LIST_PRODUCTS, GET_LIST_PRODUCTS_SUCCESS, GET_DETAIL_PRODUCT, GET_DETAIL_PRODUCT_SUCCESS } from "../types/productType"



export function listProductAction(idPeticion) {
    return async (dispatch) => {
      dispatch(listProduct());
  
      try {
        const response =  await getListProduct()
        dispatch(listProductSuccess(response));
      } catch (error) {
        message.error("Error al tratar de obtener lista de productos!");
        
      }
    };
  }
  
  const listProduct = () => ({
    type:  GET_LIST_PRODUCTS,
  });
  
  const listProductSuccess = (products) => ({
    type: GET_LIST_PRODUCTS_SUCCESS,
    payload: products,
  });
  
 
  export function detailProductAction(product) {
    return async (dispatch) => {
      dispatch(detailProduct());
  
      try {
        const response =  await getDetailProduct(product.id)
        dispatch(detailProductSuccess(response));
      } catch (error) {
        message.error("Error al tratar de obtener producto!");
        
      }
    };
  }
  
  const detailProduct = () => ({
    type:  GET_DETAIL_PRODUCT, 
  });
  
  const detailProductSuccess = (product) => ({
    type: GET_DETAIL_PRODUCT_SUCCESS,
    payload: product,
  });
  
  