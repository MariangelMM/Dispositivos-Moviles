
import axios from "axios";

//Lectura de la variable de entorno
const uri = process.env.BASE_URL || 'http://localhost:3001'


export const getListProduct = ( ) => {
  return axios.get( `${uri}/api/product` ).then( response => response.data );
}

export const getDetailProduct = (id) => {    
  return axios.get( `${uri}/api/product/${id}` ).then( response => response.data );
}

export const postAddProduct = (data) => {  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    }
	};
  return axios.post( `${uri}/api/cart/`, data, config ).then( response => response.data );

}