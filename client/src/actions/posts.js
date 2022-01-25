import * as api from "../api/index";

export const getPosts = (params) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(params);
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error);
    }
};
