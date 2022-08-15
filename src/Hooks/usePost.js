import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import { createPost, deletePost, getPosts, getSinglePost, getUserPosts } from '../service/post.api';

export const useUserQuery = () => {
    const {data, error, isLoading, isSuccess, isError} = useQuery(['posts'], getPosts);
    return {
        data,
        error,
        isLoading,
        isSuccess,
        isError,
    };
}

export const createPostMutation = () => {
    const queryClient = useQueryClient();

    return useMutation (createPost, {
        onSuccess: (data) => {
            queryClient.setQueryData(['posts'], data);
        },
        onError: (error) => {
            // console.log(error);
            throw error;
        }
    })
}

export const deletePostMutation = () => {
    const queryClient = useQueryClient();

    return useMutation (deletePost, {
        onSuccess: (data) => {
            queryClient.setQueryData(['posts'], data);
        },
        onError: (error) => {
            // console.log(error);
            throw error;
        }
    })
}
