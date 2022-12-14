import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useSingleConvoQuery } from "../../Hooks/useSingleConversation";
import { useUserQuery } from "../../Hooks/useUser";
import { getUserInfo } from "../../service/auth.api";
import { getAllMessages, sendMessage } from "../../service/chat.api";
import { io } from "socket.io-client";
import { baseImgURL } from "../../utils/constants";

const socket = io(baseImgURL);

export default function Messanger() {

  const {id} = useParams()
  const [welcomemsg, setWelcomemsg] = useState("")
  const {data: currentUser} = useUserQuery();
  const [chats, setChats] = useState([])


  useEffect(() => {
    sendPing()
    receivePing()
    // socket.emit('ping', {id: id});
    return () => {
      socket.off('join')
    };
    
  }, [id])

  useEffect(() => {
    receivePing()
    receiveChat()
    // socket.emit('ping', {id: id});
    return () => {
      socket.off('join')
      socket.off('chat')
    };
  }, [socket]);
  
  const sendPing = async() => {
    socket.emit('join', {
      id: currentUser?.id,
      name: currentUser?.username,
      text: `${currentUser?.username} is online`
    });
  }

  const receivePing =()=>{
    socket.on('join', (data) => {
      // console.log(data);
      if (!data.name) return;
      setWelcomemsg(data.text);
    });
  }

  const sendChat = (data)=> {
    socket.emit('chat', data);
  }

  const receiveChat =()=> {
    socket.on('chat', (data) => {
      if (data.receiverId === JSON.stringify(currentUser?.id) && data.senderId === id) {
        setChats(
          (prev) => [...prev, data]
        );
      };
    });
  }
  

  const {data: convo} = useSingleConvoQuery(id)
  const [convoId, setConvoId] = useState("")
  const [friendName, setFriendName] = useState("")
  
  useEffect(() => {
    if(!convo)return;
    setConvoId(convo.id)
    fetchChats(convo.id)
  }, [convo])

  useEffect(() => {
    getUserDetails();
  }, [])
  
  
  async function getUserDetails(){
    try {
      const res = await getUserInfo(id)
      setFriendName(res.username)
    } catch (error) {
      console.log(error);
    }
      
  }

  useEffect(() => {
    console.log(chats)
  }, [chats])
  

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const [newText, setNewText] = useState("")

  async function fetchChats(id) {
    if (!id) {
      return setChats([])
    }

    try {
      const messages = await getAllMessages(id);
      // console.log("messages", messages)
      setChats(messages)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(chats.length == 0)return;
    scrollToBottom()
  }, [chats])

  const handleChange= (e) => {
    setNewText(e.target.value)
  }

  const handleSubmit= async(e) => {
    e.preventDefault()

    try {
      if(!newText)return;

      const msg = {
        senderId: currentUser?.id.toString(),
        receiverId: id,
        text: newText
      }

      await sendMessage(msg)
      chats.push(msg)
      sendChat(msg)
      setNewText("")
      scrollToBottom()
      
    } catch (error) {
      console.log(error)
    }
      
  }
  
  

  return (
    <Layout>
      <div className=" bg-white shadow rounded-lg min-h-[90vh] relative">
        <div className="text-2xl p-3 border-b mb-2">
          Private Chat - {friendName}
        </div>

        <div className="pb-12">
          <div className="text-small text-center mb-2 text-gray-400">{welcomemsg && welcomemsg}</div>

          
          {
            chats.map((chat, index) => {
              return (
                chat.senderId == currentUser.id
                  ? <UserChat chat={chat} key={index} />
                  : <GuestChat chat={chat} friendName={friendName} key={index} />
              );
            })
          }
        </div>

        {/* send component */}
        <div className="mt-8 w-full bg-blue-500">
          <div ref={messagesEndRef} ></div>

          <div>
            <form onSubmit={handleSubmit} className="flex w-1/2 fixed bottom-0 justify-between items-center  gap-2">
              <input
                type="message"
                id="message"
                name="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                placeholder="Send a message..."
                value={newText}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function GuestChat({chat, friendName}) {
  return (
    <div className="card p-2 mx-3 border rounded-lg shadow w-3/4 mb-2">
      {
        friendName
      }: {chat.text}
    </div>
  );
}

function UserChat({chat}) {
  return (
    <div className="card p-2 mx-3 border rounded-lg bg-blue-500 text-white ml-auto shadow w-3/4 mb-2">
      You: {chat.text}
    </div>
  );
}
