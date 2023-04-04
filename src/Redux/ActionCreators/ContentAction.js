import { LOAD_CONTENT } from "../Actions/ActionTypes"

export const loadContent = (data) => {
    return {
        type: LOAD_CONTENT,
        payload: data
    }
}