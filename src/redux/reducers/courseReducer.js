import { GET_CODING,GET_GRAPHIC_DESIGN,GET_COKING ,GET_SINGLE_COURSE ,ADMIN_COURSES } from "../actionTypes";

const courseState = {
  cooking:null,
  coding:null,
  graphic:null,
  single:null,
  count:null,
  admincourses:null
};

const courseReducer = (state = courseState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COKING:
      return { ...state, cooking:payload };
    case GET_GRAPHIC_DESIGN:
      return { ...state, coding: payload };
    case GET_CODING:
      return {...state, graphic: payload}
      case GET_SINGLE_COURSE:
        return {...state, single: payload , count:action.count}
        case ADMIN_COURSES:
        return {...state, admincourses: payload}
    default:
      return state;
  }
};

export default courseReducer;
