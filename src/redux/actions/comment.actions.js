import * as types from "../constants/comment.constants";
import * as postTypes from "../constants/post.constants";

import api from "../../apiService";

const createComment = (post, body) => async (dispatch) => {
    try {
        dispatch({ type: types.CREATE_COMMENT_REQUEST })

        const comment = {
            body,
            userId: 1,
            postId: post.id
        }


        const { data } = await api.post("/comments", comment)
        dispatch({ type: postTypes.CREATE_COMMENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.CREATE_COMMENT_FAILURE })
        console.log({ error })
    }
}

const commentActions = {
    createComment
};

export { commentActions }
