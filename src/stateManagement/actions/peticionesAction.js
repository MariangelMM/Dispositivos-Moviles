
import { get } from "../../api/apiUrl";
import { message } from "antd";
import { GET_LIST_PRODUCTS, GET_LIST_PRODUCTS_SUCCESS } from "../types/productType"



export function listarCasosDePruebaAction(idPeticion) {
    return async (dispatch) => {
      dispatch(listarCasosPrueba());
  
      try {
        const response =  await get()
        dispatch(listarCasosPruebaExito(response));
      } catch (error) {
        message.error("Error al tratar de obtener los casos de pruebas!");
        
      }
    };
  }
  
  const listarCasosPrueba = () => ({
    type:  GET_LIST_PRODUCTS,
  });
  
  const listarCasosPruebaExito = (products) => ({
    type: GET_LIST_PRODUCTS_SUCCESS,
    payload: products,
  });
  
 