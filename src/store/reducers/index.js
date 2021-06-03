import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import donateReducer from "./donateReducer";
import adoptReducer from "./adoptReducer";

export default combineReducers({
  auth: authReducer,
  donate: donateReducer,
  adopt: adoptReducer,
  firebase: firebaseReducer,
});
