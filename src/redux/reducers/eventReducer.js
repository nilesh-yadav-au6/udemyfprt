import { ADD_EVENTS, GET_EVENT_TYPES } from "../actionTypes";

const eventState = {
  events: [],
  event_types: []
};

const eventReducer = (state = eventState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EVENTS:
      return { ...state, events: payload };
    case GET_EVENT_TYPES:
      return { ...state, event_types: payload };
    default:
      return state;
  }
};

export default eventReducer;
