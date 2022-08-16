import React from "react";
import { useUserQuery } from "../../Hooks/useUser";
import { dummyImage } from "../../utils/constants";

export default function SinglePost({post, currentUser}) {


  return (
    <div className="post p-3 bg-white shadow-lg mt-3 rounded-lg">
      <div className="nav-profile flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10 shadow rounded-full"
            src={dummyImage}
            alt="profile"
          />
          <div>
            {
              post?.User?.username
            }
          </div>
        </div>

        {/* { post?.User.id !==  currentUser?.id && <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Follow
          </button>

          {false && (
            <button
              type="button"
              className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            >
              Unfollow
            </button>
          )}
        </div>} */}
      </div>

      <div className="mt-3">
        <div>{post.caption}</div>
        <div className="mt-3">
          <img className="w-full h-[300px] shadow fit-center" src={dummyImage} alt="profile" />
        </div>
      </div>
    </div>
  );
}
