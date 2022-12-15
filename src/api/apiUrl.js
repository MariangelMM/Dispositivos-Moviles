
import axios from "axios";

//Lectura de la variable de entorno
const uri = "http://localhost:3001/api";


export const getListProduct = ( ) => {
  return axios.get( `${uri}/product` ).then( response => response.data );
}

export const getDetailProduct = (id) => {    
  return axios.get( `${uri}/product/${id}` ).then( response => response.data );
}

export const postAddProduct = (data) => {  
  const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
  return axios.post( `${uri}/product/cart`, data, config ).then( response => response.data );

}