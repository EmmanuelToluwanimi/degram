import React, { useEffect, useState } from "react";
import { dummyImage, formatUsername } from "../../utils/constants";
import { BiLogIn } from "react-icons/bi";
import { ImUserPlus } from "react-icons/im";
import { Link } from "react-router-dom";
import { useUserQuery } from "../../Hooks/useUser";

export default function Navbar({user}) {
  // const {data: user}=useUserQuery()
  // useEffect(() => {
    
  
  //   setUname(user?.username || "")
  // }, [user])

  // const [uname, setUname] = useState("")
  
  // console.log(user.)
  return (
    <nav className="flex justify-between z-10 items-center text- bg-white py-3 px-10 shadow w-full sticky top-0">
      <div className="nav-logo text-3xl">Degram</div>
      <div className="nav-search w-1/3">
        <input
          type="search"
          name="search"
          inputMode="search"
          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 shadow-sm"
          required
        />
      </div>
      <div className="nav-profile flex items-center gap-2">
      <div className="nav-profile-dropdown">
          {formatUsername(user?.username || "")}
        </div>
        <img
          className="w-10 h-10 shadow rounded-full"
          src={dummyImage}
          alt="profile"
        />
        
      </div>
      {/* <div className="nav-links flex gap-2">
        <div>
          <Link to="/login">
            <span className="text-black bg-blue-100 rounded hover:bg-blue-300 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 flex gap-2 items-center text-center">
              <BiLogIn />
              Login
            </span>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <span className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 flex gap-2 items-center text-center shadow shadow-blue-100">
              <ImUserPlus />
              Register
            </span>
          </Link>
        </div>
      </div> */}
    </nav>
  );
}
