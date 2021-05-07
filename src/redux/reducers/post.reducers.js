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