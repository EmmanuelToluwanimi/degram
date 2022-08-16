import React from "react";
import Layout from "../../components/Layout";
import SinglePost from "../../components/Singlepost";
import { dummyImage } from "../../utils/constants";

export default function Profile() {
  const tabs = ["Posts", "Following", "Followers"];
  const [selectedtab, setSelecttab] = React.useState(tabs[0]);
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
                    >
                      {tab}
                    </div>
                  );
                })}

              </div>


              {selectedtab == "Posts" && <Userposts/>}
              {selectedtab === "Followers" && <Followers/>}
              {selectedtab === "Followings" && <Followings/>}

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Userposts() {
  return (
    <>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
      <SinglePost/>
    </>
  )
}

function Followers() {
  return (
    <>
      <div className="mt-2">
        <div className="mt-2 text-xl font-semibold">
          Followers (32)
        </div>
        <div className="mt-2">
          <Userlabel/>
        </div>
      </div>
    </>
  )
}

function Followings() {
  return (
    <>
      <div className="mt-2">
        <div className="mt-2 text-xl font-semibold">
          Followings (32)
        </div>
        <div className="mt-2">
          <Userlabel/>
        </div>
      </div>
    </>
  )
}

function Userlabel(){
  return (
    <>
    <div className="flex gap-2 p-2 border rounded-lg text-left items-center mb-2 ">
            <img
              className="w-10 h-10 shadow rounded-full"
              src={dummyImage}
              alt="profile"
            />
            <div>
              <div className="text-lg font-medium">Alice Banger</div>
            </div>
          </div>
    </>
  )
}
