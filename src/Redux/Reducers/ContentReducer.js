import { LOAD_CONTENT } from "../Actions/ActionTypes"

const initialState = {
    contents: []
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTENT:
            return {
                ...state,
                contents: action.payload
            };
        default:
            return state;
    }
}

export default contentReducer;