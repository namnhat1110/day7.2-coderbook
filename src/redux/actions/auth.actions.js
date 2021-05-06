import { toast } from "react-toastify";

import * as types from "../constants/auth.constants";

import api from "../../apiService";

function register() {
    try {

    } catch (error) {
        console.log({ error })
    }
};

const authActions = {
    register,
};

export { authActions }
