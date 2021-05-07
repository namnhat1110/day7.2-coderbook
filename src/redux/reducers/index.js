import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import postReducer from "./post.reducers";

export default combineReducers({
    auth: authReducer,
    post: postReducer,
});