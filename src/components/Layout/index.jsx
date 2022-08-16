import React from "react";
import Navbar from "../Navbar";
import Sidenav from "../Sidenav";

// import Navbar from './Navbar/index.jsx'

export default function Layout({ children }) {
  return (
    <section className="bg-blue-50 min-h-screen">
      <Navbar />
      <div className="flex justify-center gap-4 mt-3">
        <Sidenav />
        <main className="main-body w-[50%] ">{children}</main>
      </div>
    </section>
  );
}
