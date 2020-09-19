import { ADD_EVENTS, GET_EVENT_TYPES } from "../actionTypes";
import Axios from "axios";

export const addEvent = (detaills) => async (dispatch) => {
  try {
    // const eventdata = JSON.stringify(detaills);
    const token = `Bearer ${localStorage.getItem("token")}`;
    const data = await Axios.post(`https://ik-react-task.herokuapp.com/events/`, {...detaills}, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      }
    });
    console.log(data)
  } catch (err) {
    console.error(err);
  }
};

export const getEvent = () => async (dispatch) => {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    console.log(token);
    const data = await Axios.get(
      `https://ik-react-task.herokuapp.com/events/`,
      {
        headers: {
          Authorization: token
        }
      }
    );
    dispatch({ type: ADD_EVENTS, payload: data.data });
  } catch (err) {
    console.error(err);
  }
};

export const getEventUser = () => async (dispatch) => {
  try {
    const token = `Bearer ${localStorage.getItem("token")}`;
    console.log(token);
    const data = await Axios.get(
      `https://ik-react-task.herokuapp.com/events/event_types/`,
      {
        headers: {
          Authorization: token
        }
      }
    );
    console.log(data);
    dispatch({ type: GET_EVENT_TYPES, payload: data.data });
  } catch (err) {
    console.error(err);
  }
};
