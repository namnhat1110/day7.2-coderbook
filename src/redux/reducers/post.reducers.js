import * as types from "../constants/post.constants";

const initialState = {
    posts: [],
    loading: false
};

const postReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_POST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case types.GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: payload
            }
        case types.CREATE_COMMENT_SUCCESS:
            const idx = state.posts.findIndex(p => p.id === action.payload.postId)
            state.posts[idx].comments = state.posts[idx].comments.concat(payload)
            const posts = state.posts
            return {
                ...state,
                posts
            }
        case types.GET_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: 'Request failed'
            }


        default:
            return state;
    }
};

export default postReducer;