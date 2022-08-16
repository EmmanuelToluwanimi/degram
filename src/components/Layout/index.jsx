import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserQuery } from "../../Hooks/useUser";
import { getToken } from "../../utils/constants";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";

// import Navbar from './Navbar/index.jsx'

export default function Layout({ children }) {

 

    
  const token = getToken();
  // console.log(token)
  if (token=== undefined || token === null || token === "") {
    return <Navigate to="/login" />;
  }

  

  const {data:user} = useUserQuery();

  return (
    <section className="bg-blue-50 min-h-screen">
      <Navbar user={user} />
      <div className="flex justify-center gap-4 mt-3">
        <Sidenav user={user}/>
        <main className="main-body w-[50%] ">{children}</main>
      </div>
    </section>
  );
}
