
import { combineReducers } from 'redux';

import peticionesReducer from './peticionesReducers';

export default combineReducers ( {
    peticiones: peticionesReducer,
} );