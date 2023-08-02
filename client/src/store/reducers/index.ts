import { combineReducers } from "redux"; 
import popupReducer from "./popupReducer";
import modalReducer from "./modalReducer";

const rootReducers = combineReducers({ 
    popup: popupReducer,
    modal: modalReducer,
})

export default rootReducers