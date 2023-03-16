import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";
import Increment from "./Increment";

const rootReduer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
  increment: Increment
});

export default rootReduer;
