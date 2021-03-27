import axios from "axios";
import {
  LOGOUT_USER,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
} from "./types";
import { USER_SERVER } from "../components/Config.js";
const Cookie = require("js-cookie");

const registerUser = (name, email, password, avatar, token) => async (
  dispatch
) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { name, email, password, avatar, token },
  });
  try {
    const { data } = await axios.post(`${USER_SERVER}/register`, {
      name,
      email,
      password,
      avatar,
      token,
    });

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};

const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(`${USER_SERVER}/login`, {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

// export function auth() {
//   const request = axios
//     .get(`${USER_SERVER}/auth`)
//     .then((response) => response.data);

//   return {
//     type: AUTH_USER,
//     payload: request,
//   };
// }

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
export { loginUser, registerUser };
