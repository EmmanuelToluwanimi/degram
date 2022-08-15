import { api } from "../utils/config";
import { getOptions } from "../utils/constants";

export const followUser = async (id) => {
    try {
        const res = await api.get(`/user/follow/${id}`, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const unfollowUser = async (id) => {
    try {
        const res = await api.get(`/user/unfollow/${id}`, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const getFollowers = async () => {
    try {
        const res = await api.get(`/user/followers`, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const getFollowing = async () => {
    try {
        const res = await api.get(`/user/following`, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}