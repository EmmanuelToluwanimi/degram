import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Userlabel from "../../components/Userlabel";
import { getAllConversations } from "../../service/chat.api";


export default function Chat() {

  useEffect(() => {
   fetchConversations()
  }, [])

  async function fetchConversations() {
    try {
      const res = await getAllConversations();
      console.log("conversations", res)
    } catch (error) {
      console.log(error)
    }
  }
  

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
