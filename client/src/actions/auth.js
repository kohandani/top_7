import * as api from "../api/index";

export const signUpAction = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: "AUTH", data });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const signInAction = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: "AUTH", data });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};
