import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import SinglePost from "../../components/Singlepost";
import Userlabel from "../../components/Userlabel";
import { getFollowers, getFollowing } from "../../service/Follow.api";
import { getUserPosts } from "../../service/post.api";
import { dummyImage } from "../../utils/constants";


export default function Profile() {
  const tabs = ["Posts", "Followings", "Followers"];
  const [selectedtab, setSelecttab] = React.useState(tabs[0]);
  const [userposts, setUserposts] = useState([])
  const {id} = useParams();
  const [followingCount, setFollowingCount] = useState(0)
  const [following, setFollowing] = useState([])
  const [followersCount, setFollowersCount] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    fetchUserProfile(id);
    fetchFollowers()
    fetchFollowing()
  }, [id])
  

  async function fetchUserProfile(id){
    try {
      const res = await getUserPosts(id);
      setUserposts(res);
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchFollowing(){
    try {
      const res = await getFollowing();
      setFollowing(res.followings);
      setFollowingCount(res.followingsCount)
      // console.log("folowingnn",res)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchFollowers(){
    try {
      const res = await getFollowers();
      setFollowers(res.followers);
      setFollowersCount(res.followersCount)
      // console.log("foloowas",res)
    } catch (error) {
      console.log(error)
    }
  }
  

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
              {selectedtab === "Followers" && <Followers followers={followers} followersCount={followersCount}/>}
              {selectedtab === "Followings" && <Followings followings={following} followingsCount={followingCount}/>}
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

function Followers({followers, followersCount}) {
  console.log("followers",followers)
  return (
    <>
      <div className="mt-2">
        <div className="mt-2 text-xl font-semibold">Followers ({followersCount})</div>
        <div className="mt-2">
          {
            followers.map((follower, index) => {
              return (
                <Userlabel key={index} data={follower}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

function Followings({followings, followingsCount}) {
  console.log("followings",followings)
  return (
    <>
      <div className="mt-2">
        <div className="mt-2 text-xl font-semibold">Followings ({followingsCount})</div>
        <div className="mt-2">
          {
            followings.map((following, index) => {
              return (
                <Userlabel key={index} data={following}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

