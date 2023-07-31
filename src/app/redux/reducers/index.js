import { combineReducers } from "redux";
import { userReducer } from "./user";
import { loadingBarReducer } from "react-redux-loading-bar";
import formReducer from "./form";
import { jobReducer } from "./jobs";

export const reducers = combineReducers({
  user: userReducer,
  loadingBar: loadingBarReducer,
  form: formReducer,
  jobs:jobReducer

});
