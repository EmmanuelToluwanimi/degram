import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import { followUser, unfollowUser, getFollowers, getFollowing } from '../service/Follow.api';
// import { createPost, deletePost, getPosts, getSinglePost, getUserPosts } from '../service/post.api';

export const useFollowerQuery = () => {
    const {data, error, isLoading, isSuccess, isError} = useQuery(['followers'], getFollowers);
    return {
        data,
        error,
        isLoading,
        isSuccess,
        isError,
    };
}
