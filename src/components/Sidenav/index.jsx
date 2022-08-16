import React from "react";
import { Link, useLocation } from "react-router-dom";
import { dummyRoutes } from "../../utils/constants";

export default function Sidenav({user}) {
  const location = useLocation().pathname;

  return (
    <aside className="side-nav w-[20%] ">
      <div className="shadow bg-white py-3 sticky top-[80px] rounded-lg">
        <div className="text-2xl px-3">Menu</div>
        <div className="sidenav-links">
          {dummyRoutes.map((route, index) => {
            return (
              <div
                key={index}
                className={`flex items-center gap-2 hover:bg-gray-50 p-3 ${
                  location !== route.path(user?.id)
                    ? "bg-white text-gray-400"
                    : "bg-blue-50 text-gray-600"
                }`}
              >
                <Link to={route.path(user?.id)}>
                  <span className="">{route.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
