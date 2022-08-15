import { api } from "../utils/config";
import { getOptions } from "../utils/constants";


export const createPost = async (data) => {
    try {
        const res = await api.post("/posts", data, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const getPosts = async () => {
    try {
        const res = await api.get("/posts", getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const getSinglePost = async (id) => {
    try {
        const res = await api.get(`/posts/${id}`, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const getUserPosts = async (id) => {
    try {
        const res = await api.get(`/posts/${id}/user`, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const deletePost = async (id) => {
    try {
        const res = await api.delete(`/posts/${id}`, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}