import * as types from "../constants/post.constants";

import api from "../../apiService";

const getPosts = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_POSTS_REQUEST });
    const { data } = await api.get("/posts");
    dispatch({ type: types.GET_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_POSTS_FAILURE });
    console.log({ error });
  }
};

const getGroupPosts = (groupId) => async (dispatch) => {
  try {
  } catch (error) {}
};

const getUserPosts = (userId) => async (dispatch) => {
  try {
  } catch (error) {}
};

const postActions = {
  getPosts,
  getUserPosts,
  getGroupPosts,
};

export { postActions };
