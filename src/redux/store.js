import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../redux/reducers/userReducer";
import eventReducer from "../redux/reducers/eventReducer";
import courseReducer from "../redux/reducers/courseReducer"
import reviewReducer from "../redux/reducers/reviewReducer"
import thunk from "redux-thunk";

const reducer = combineReducers({
  user: userReducer,
  events: eventReducer,
  courses:courseReducer,
  reviews:reviewReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// store.dispatch(userLogin({type:"USER_LOGIN" , payload:{email:"nilesh@gmail.com" , password:7894}}))

export default store;
