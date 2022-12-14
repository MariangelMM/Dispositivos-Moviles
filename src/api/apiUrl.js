//Lectura de la variable de entorno
const uri = "https://front-test-api.herokuapp.com/";

/**
 * API Fetch
 * fetch(url, [options])
 */

export const get = async () => {
  const response = await fetch(`${uri}/api/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};


