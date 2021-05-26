import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import donateReducer from "./donateReducer";

export default combineReducers({
  auth: authReducer,
  donate: donateReducer,
  firebase: firebaseReducer,
});
