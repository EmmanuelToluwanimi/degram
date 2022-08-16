import React from "react";
import Createpost from "../../components/Createpost";
import Layout from "../../components/Layout";
import SinglePost from "../../components/Singlepost/index.jsx";


export default function Home() {
  // console.log(location);

  return (
    <Layout>
      <Createpost />
      {/* list of posts */}
      <div className="p-3 bg-gray-50 shadow border rounded-lg mt-3">
        <div>
          <div className="text-2xl px-3 border-b"> Posts</div>
          <SinglePost />
        </div>
      </div>
    </Layout>
  );
}
