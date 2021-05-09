import * as types from "../constants/reaction.constants"

import api from "../../apiService";

const createReaction = (emo) => async (dispatch) => {
    try {
        dispatch({ type: types.CREATE_REACTION_REQUEST })

        const reaction = {
            emo,
            userId: 1,
            emoId: emo.id
        }


        const { data } = await api.post("/reactions", reaction)
        dispatch({ type: types.CREATE_REACTION_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.CREATE_REACTION_FAILURE })
        console.log({ error })
    }
}

const reactionActions = {
    createReaction
};

export { reactionActions }