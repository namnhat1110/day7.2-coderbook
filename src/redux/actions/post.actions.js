// import { toast } from "react-toastify";

import * as types from "../constants/post.constants";

import api from "../../apiService";

const getPosts = (email, password) => async (dispatch) => {
    try {
        // const { data } = await api.post("/users", { email, password })
        // dispatch({ type: types.GET_POST_SUCCESS, payload: data })


        dispatch({ type: types.GET_POST_REQUEST })
        const { data } = await api.get("/posts")
        dispatch({ type: types.GET_POST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.GET_POST_FAILURE })
        console.log({ error })
    }
};

const getUserPosts = (userId) => async (dispatch) => {
    try {
    } catch (error) { }
}

const getGroupPosts = (groupId) => async (dispatch) => {
    try {
    } catch (error) { }
}

// const createPostComment = (post, commentBody) => async (dispatch) => {
//     try {
//         const { data } = await api.put("/posts/" + post.id, {
//             ...post,
//             comments: post.comments.concat({
//                 body: commentBody
//             })

//         })
//     } catch (error) { }
// }

const postActions = {
    getPosts,
    getUserPosts,
    getGroupPosts,
    // createPostComment
};

export { postActions }
