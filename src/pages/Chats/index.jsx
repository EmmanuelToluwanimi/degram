import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Userlabel from "../../components/Userlabel";
import Userlist from "../../components/Userlist";
import { useUserQuery } from "../../Hooks/useUser";
import { getAllConversations } from "../../service/chat.api";


export default function Chat() {
  const [convos, setConvos] = useState([]);
  const { data: currentUser } = useUserQuery();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchConversations();
  }, []);

  async function fetchConversations() {
    try {
      const res = await getAllConversations();
      // console.log("conversations", res);
      // console.log("currentUser", currentUser)
      setConvos(res);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Layout>
      <div className="p-3 bg-white shadow rounded-lg">
        <div className="text-2xl px-3 border-b">Chats</div>
        <div className="mt-2">
          {convos.map((convo, index) => {
            return (
              <Userlist
                data={
                  convo["user1"].id === currentUser.id
                    ? convo["user2"]
                    : convo["user1"]
                }
                key={index}
                convo={convo}

              />
            );
          })}

        </div>
      </div>
    </Layout>
  );
}
