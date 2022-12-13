
   const initialState = {
    peticiones: [
        {
            key: 1,
            nomProduct: `Nombre de la Petición 1`,
            numberPrueba : 1,
        },
    ],
    loading: false,
    error: null
}
  
  // eslint-disable-next-line
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case "":
        return {
          ...state,
          loading: false,
          peticiones: [...state.peticiones, action.payload]
        };
  
      default:
        return state;
    }
  }
  