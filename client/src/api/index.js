import axios from "axios";
const API = axios.create({
    baseURL: `http://localhost:5000/api/v1`,
});
// POSTS APIS
export const fetchPosts = (cate) =>
    API.get(`/posts?cate=${cate}`);
// auth APIS

export const signUp = (formData) => API.post("users/register", formData);
export const signIn = (formData) => API.post("users/login", formData);
