import { api } from "../utils/config";
import Cookies from 'js-cookie'
import { setCookie } from "../utils/constants";

export const login = async (data) => {

    try {
        const res = await api.post('/auth/login', data);
        const token = res.headers["x-token"];
        setCookie("x-token", token, 1);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        return res.data.data;
    } catch (error) {
        // console.log(error.response.data);

        throw error.response.data;
    }
}

export const register = async (data) => {

    try {
        const res = await api.post('/auth/register', data);
        const token = res.headers["x-token"];
        setCookie("x-token", token, 1);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        return res.data.data;
    } catch (error) {
        // console.log(error.response.data);

        throw error.response.data;
    }
}