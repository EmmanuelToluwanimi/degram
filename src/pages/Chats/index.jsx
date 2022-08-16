import React from "react";
import Layout from "../../components/Layout";
import Userlabel from "../../components/Userlabel";


export default function Chat() {
  return (
    <Layout>
      <div className="p-3 bg-white shadow rounded-lg">
        <div className="text-2xl px-3 border-b">Chats</div>
        <div className="mt-2">
          <Userlabel />
          <Userlabel />
          <Userlabel />
        </div>
      </div>
    </Layout>
  );
}
