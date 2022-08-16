import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import { getSingleConversation } from '../service/chat.api';
import { followUser, unfollowUser, getFollowers, getFollowing } from '../service/Follow.api';
// import { createPost, deletePost, getPosts, getSinglePost, getUserPosts } from '../service/post.api';

export const useSingleConvoQuery = (id) => {
    const {data, error, isLoading, isSuccess, isError} = useQuery(['convo', id], getSingleConversation);
    return {
        data,
        error,
        isLoading,
        isSuccess,
        isError,
    };
}