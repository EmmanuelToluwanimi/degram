import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import { followUser, unfollowUser, getFollowers, getFollowing } from '../service/Follow.api';

export const useFollowingQuery = () => {
    const {data, error, isLoading, isSuccess, isError} = useQuery(['followings'], getFollowing);
    return {
        data,
        error,
        isLoading,
        isSuccess,
        isError,
    };
}

export const followUserMutation = () => {
    const queryClient = useQueryClient();

    return useMutation (followUser, {
        onSuccess: (data) => {
            queryClient.setQueryData(['followings'], data);
        },
        onError: (error) => {
            // console.log(error);
            throw error;
        }
    })
}

export const unfollowUserMutation = () => {
    const queryClient = useQueryClient();

    return useMutation (unfollowUser, {
        onSuccess: (data) => {
            queryClient.setQueryData(['followings'], data);
        },
        onError: (error) => {
            // console.log(error);
            throw error;
        }
    })
}
