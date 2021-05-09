import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import postReducer from "./post.reducers";
import commentReducer from "./comment.reducers";

export default combineReducers({
    auth: authReducer,
    post: postReducer,
    comment: commentReducer
});