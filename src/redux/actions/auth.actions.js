// import { toast } from "react-toastify";

import * as types from "../constants/auth.constants";

import api from "../../apiService";

const register = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: types.REGISTER_REQUEST })
        const { data } = await api.post("/users", { email, password })

        dispatch({ type: types.REGISTER_SUCCESS, payload: data })

    } catch (error) {
        console.log({ error })
    }
};

const authActions = {
    register,
};

export { authActions }
