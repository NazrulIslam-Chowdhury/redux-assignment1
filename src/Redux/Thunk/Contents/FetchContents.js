import { loadContent } from "../../ActionCreators/ContentAction";

const loadContentData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/content');
        const data = await res.json();

        if (data.length) {
            dispatch(loadContent(data))
        }
    }
}

export default loadContentData;