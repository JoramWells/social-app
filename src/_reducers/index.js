import { combineReducers } from "redux";
import { userRegisterReducer, userSigninReducer } from "./user_reducer";
import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import Cookie from "js-cookie";
import { blogListReducer } from "./blog_reducers";

const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = { userSignin: { userInfo } };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  blogList: blogListReducer,
});

const index = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default index;
