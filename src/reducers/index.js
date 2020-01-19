import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducers from "./UsersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducers
});
