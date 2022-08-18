import Cookies from "js-cookie";

export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://degram.herokuapp.com/api"
    : "http://localhost:5000/api";

export const baseImgURL =
  process.env.NODE_ENV === "production"
    ? "https://degram.herokuapp.com"
    : "http://localhost:5000";

export const dummyImage =
  "https://avatars3.githubusercontent.com/u/17098281?s=460&v=4";

export const dummyRoutes = [
  {
    path: (id) => {
      return "/";
    },
    name: "Home",
    icon: "FaHome",
  },
  {
    path: (id) => {
      return "/conversations";
    },
    name: "Chats",
    icon: "FaHome",
  },
  {
    path: (id) => {
      return "/profile/" + id;
    },
    name: "Profile",
    icon: "FaHome",
  },
  {
    path: (id) => {
      return `/profile/${id}?tab=Followings`;
    },
    name: "Friends",
    icon: "FaHome",
  },
  {
    path: (id) => {
      return "/#";
    },
    name: "Photos",
    icon: "FaHome",
  },
  {
    path: (id) => {
      return "/#";
    },
    name: "Events",
    icon: "FaHome",
  },
];

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + cvalue + ";" + expires + ";path=/;secure=true";
};

export const getToken = () => {
  return Cookies.get("x-token") || "";
};

export const clearCookies = () => {
  Cookies.remove("x-token");
  Cookies.remove("x-refresh-token");
};

export const clearLocalStorage = () => {
  localStorage.removeItem("user");
};

export function formatUsername(username) {
  return username.length > 6 ? username.substring(0, 6) + "..." : username;
}

export const getOptions = () => {
  return {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
};
