import * as types from "../constants/post.constants";

const initialState = {
  posts: [],
  loading: false
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload
      };

    case types.GET_POSTS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        message: "Api request failured~!~!~~",
      };
    default:
      return state;
  }
};

export default postReducer;
