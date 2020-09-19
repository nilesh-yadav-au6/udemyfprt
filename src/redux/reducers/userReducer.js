import { USER_CREATE, USER_LOGIN,USER_LOGOUT ,GET_ORDERS } from "../actionTypes";

const userState = {
  user: null,
  orders:null
};

const userReducer = (state = userState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_CREATE:
      return { ...state, ...state.user.push(payload) };
    case USER_LOGIN:
      localStorage.setItem("token", payload.accessToken);
      return { ...state, user: payload };
    case USER_LOGOUT:
      localStorage.removeItem('token')
      return {...state, user: null}
      case GET_ORDERS:
        return {...state, orders: payload}
    default:
      return state;
  }
};

export default userReducer;
