import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import contentReducer from "../Reducers/ContentReducer";

const store = createStore(contentReducer, applyMiddleware(thunk));

export default store;