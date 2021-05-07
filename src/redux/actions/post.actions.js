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

    } catch (error) {

    }
}

const getGroupPosts = (groupId) => async (dispatch) => {
    try {

    } catch (error) {

    }
}

const postActions = {
    getPosts,
    getUserPosts,
    getGroupPosts
};

export { postActions }
