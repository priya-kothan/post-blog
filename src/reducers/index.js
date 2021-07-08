import { combineReducers } from "redux";
import postreducers from "./postreducers";
import userReducers from "./userReducers";

export default combineReducers({
  post: postreducers,
  users: userReducers,
});
