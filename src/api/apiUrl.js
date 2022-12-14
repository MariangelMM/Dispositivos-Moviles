
import axios from "axios";

//Lectura de la variable de entorno
const uri = "http://localhost:3001/api";


export const getListProduct = ( ) => {
    
  return axios.get( `${uri}/product` ).then( response => response.data );

}

export const getDetailProduct = ( id) => {    
  return axios.get( `${uri}/product/${id}` ).then( response => response.data );

}