import React from "react";
import { Link } from "react-router-dom";
import { followUserMutation, unfollowUserMutation } from "../../Hooks/useFollowing";
import { dummyImage } from "../../utils/constants";

export default function Userlabel({ data, isFollowing, isFollower }) {
  const { mutate: unfollowUser } = unfollowUserMutation();
  const{ mutate: followUser } = followUserMutation()

  function unFollowAnotherUser() {
    unfollowUser(data?.id);
  }

  function followAnotherUser() {
    followUser(data?.id);
  }

  

  return (
    <>
      <div className="flex gap-2 p-2 justify-between border rounded-lg text-left items-center mb-2 ">
        <div className="user-label flex gap-2 items-center">
          <img
            className="w-10 h-10 shadow rounded-full"
            src={dummyImage}
            alt="profile"
          />
          <div>
            <div className="text-lg font-medium">{data?.username}</div>
          </div>
        </div>
        <div>
          {!isFollowing && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              onClick={followAnotherUser}
            >
              Follow
            </button>
          )}

          {isFollowing && (
            <button
              type="button"
              className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              onClick={unFollowAnotherUser}
            >
              Unfollow
            </button>
          )}
        </div>
      </div>
    </>
  );
}
