import React from "react";
import { Navigate } from "react-router-dom";
import Createpost from "../../components/Createpost";
import Layout from "../../components/Layout";
import SinglePost from "../../components/Singlepost/index.jsx";
import { usePostQuery } from "../../Hooks/usePost";
import { useUserQuery } from "../../Hooks/useUser";
import { getToken } from "../../utils/constants";


export default function Home() {
  // console.log(location);
  // const token = getToken()

  // if (token === undefined) {
  //   return <Navigate to="login" />;
  
  // }

  const {data:posts, isLoading} = usePostQuery();
  // console.log(data);
  const {data:currentUser} = useUserQuery();




  return (
    <Layout>
      <Createpost user={currentUser}/>
      {/* list of posts */}
      <div className="p-3 bg-gray-50 shadow border rounded-lg mt-3">
        <div>
          <div className="text-2xl px-3 border-b"> Posts</div>
          {!isLoading && 
            posts?.map((post, index) => {
              return <SinglePost currentUser={currentUser} post={post} key={index}/>

            })
          }
        </div>
      </div>
    </Layout>
  );
}
