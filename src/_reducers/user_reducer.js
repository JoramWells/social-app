import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../_actions/types";

// export  function(state={},action){
//     switch(action.type){
//         case REGISTER_USER:
//             return {...state, register: action.payload }
//         case LOGIN_USER:
//             return { ...state, loginSucces: action.payload }
//         case AUTH_USER:
//             return {...state, userData: action.payload }
//         case LOGOUT_USER:
//             return {...state }
//         default:
//             return state;
//     }
// }

function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export { userSigninReducer, userRegisterReducer };
