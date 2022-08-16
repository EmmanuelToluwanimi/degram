import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout";
import SinglePost from "../../components/Singlepost";
import Userlabel from "../../components/Userlabel";
import { useFollowerQuery } from "../../Hooks/useFollowers";
import { useFollowingQuery } from "../../Hooks/useFollowing";
import { getFollowers, getFollowing } from "../../service/Follow.api";
import { getUserPosts } from "../../service/post.api";
import { dummyImage } from "../../utils/constants";


export default function Profile() {
  const tabs = ["Posts", "Followings", "Followers"];
  const [userposts, setUserposts] = useState([])
  const {id} = useParams();
  const [searchParam, setSearchParam] = useSearchParams()
  const s = searchParam.get("tab");
  const [selectedtab, setSelecttab] = React.useState(s || tabs[0]);

  useEffect(() => {
    fetchUserProfile(id);
  
  }, [id])

  async function fetchUserProfile(id){
    try {
      const res = await getUserPosts(id);
      setUserposts(res);
    } catch (error) {
      console.log(error)
    }
  }

  const {data: followings} = useFollowingQuery()
  const {data: followers} = useFollowerQuery()
  

  return (
    <Layout>
      <div className="p-3 bg-white shadow rounded-lg">
        <div className="text-2xl px-3"> Profile</div>
        <div className=" px-3">
          <img
            className="w-20 h-20 m-auto shadow rounded-full"
            src={dummyImage}
            alt="profile"
          />
        </div>
        <div className=" px-3">
          <div className="text-xl py-2 px-3 text-center">Alice Banger</div>
          {/* tabs */}
          <div className="mt-2">
            <div className="mt-2">
              <div className="flex justify-between items-center ">
                {tabs.map((tab, index) => {
                  return (
                    <div
                    key={index}
                      className={`text-xl cursor-pointer text-center border py-2 px-3 w-full hover:bg-gray-50 ${
                        tab === selectedtab ? "bg-gray-200" : "bg-white"
                      }`}
                      onClick={() => setSelecttab(tab)}
                    >
                      {tab}
                    </div>
                  );
                })}
              </div>

              {selectedtab === "Posts" && <Userposts posts={userposts} currentUser={id}/>}
              {selectedtab === "Followers" && <Followers followers={followers.followers} followings={followings.followings} followersCount={followers?.followersCount}/>}
              {selectedtab === "Followings" && <Followings followings={followings.followings} followingsCount={followings?.followingsCount}/>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Userposts({posts, currentUser}) {
  // console.log("posts",posts)
  return (
    <>

    {
      posts?.map((post, index) => {
        return (
          <SinglePost key={index} post={post} currentUser={currentUser} />
        )
      })
    }
    </>
  );
}

function Followers({followers, followersCount, followings}) {
  // console.log("followers",followers)
  return (
    <>
      <div className="mt-2">
        <div className="mt-2 text-xl font-semibold">Followers ({followersCount})</div>
        <div className="mt-2">
          {
            followers.map((follower, index) => {
              return (
                <Userlabel key={index} data={follower} isFollowing={
                  followings.find(following => following.id === follower.id) ? true : false
                }/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

function Followings({followings, followingsCount}) {
  // console.log("followings",followings)
  return (
    <>
      <div className="mt-2">
        <div className="mt-2 text-xl font-semibold">Followings ({followingsCount})</div>
        <div className="mt-2">
          {
            followings.map((following, index) => {
              return (
                <Userlabel key={index} data={following} isFollowing={true}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

