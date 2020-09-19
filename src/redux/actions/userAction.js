import { USER_CREATE, USER_LOGIN, USER_LOGOUT , GET_ORDERS } from "../actionTypes";
import Axios from "axios";

export const userCreate = (user) => async (dispatch) => {
  try {
    const { data } = await Axios.post(
      "https://udemyfprt.herokuapp.com/user/register",
      {
        ...user
      }
    );
    console.log(data)
    dispatch({ type: USER_CREATE, payload: data.user });
  } catch (err){
    console.log(err);
  }
};

export const adminCreate = (user) => async (dispatch) => {
  try {
    const { data } = await Axios.post(
      "https://udemyfprt.herokuapp.com/admin/register",
      {
        ...user
      }
    );
    console.loda(data)
    dispatch({ type: USER_CREATE, payload: data.admin });
  } catch (err){
    console.log(err);
  }
};

export const loginUser = (user) => async (dispatch) => {
  console.log(user);
  try {
    const {
      data
    } = await Axios.post(
      `https://udemyfprt.herokuapp.com/login`,
      { ...user }
    );
    console.log(data);
    dispatch({ type: USER_LOGIN, payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async (dispatch) => {
  const token = `${localStorage.getItem("token")}`;
  console.log(token);
  try {
    const {
      data
    } = await Axios.delete(
      `https://udemyfprt.herokuapp.com/logout`,
      {
        headers: {
          Authorization: token
        }
      }
    );
    console.log(data);
    dispatch({ type: USER_LOGOUT, payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const getUserOrder = () => async (dispatch, getState) => {
  try{
      const token = `${localStorage.getItem("token")}`;
      const {data} = await Axios(
          `https://udemyfprt.herokuapp.com/get/orders`,{
              headers:{
                  Authorization : token
              }
          }
      )
      console.log(data)
      dispatch({ type: GET_ORDERS, payload: data.userOrders})
  }catch(err){
      console.error(err.message);
  }
}
