import { api } from "../utils/config";
import { getOptions } from "../utils/constants";

export const getAllConversations = async () => {
    try {
        const res = await api.get("/conversations", getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const getSingleConversation = async (key) => {
    const id = key.queryKey[1]
    try {
        const res = await api.get("/conversations/"+id, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const getAllMessages = async (id) => {
    try {
        const res = await api.get(`/messages/${id}`, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const sendMessage = async (data) => {
    try {
        const res = await api.post("/messages", data, getOptions());
        return res.data.data;
    } catch (error) {
        throw error.response.data;
    }
}