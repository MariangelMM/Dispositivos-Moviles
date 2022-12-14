
import axios from "axios";

//Lectura de la variable de entorno
const uri = "http://localhost:3001";

/**
 * API Fetch
 * fetch(url, [options])
 */

// export const get = async () => {
//   const response = await fetch(`${uri}/api/product`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return response.json();
// };


export const get = ( ) => {
    
  return axios.get( `${uri}/api/product` ).then( response => response.data );

}