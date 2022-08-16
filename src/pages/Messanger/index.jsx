import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";

export default function Messanger() {


  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, []);

  return (
    <Layout>
      <div className="p-3 bg-white shadow rounded-lg min-h-screen">
        <div className="text-2xl px-3 border-b mb-2">
          Private Chat - Alice Banger
        </div>

        <div>
          {/* guest comp */}
          <GuestChat />

          {/* user comp */}
          <UserChat />
          <GuestChat />

          <GuestChat />
          <GuestChat />
          <UserChat />

          <UserChat />
          <UserChat />
          <UserChat />
          <UserChat />
          <UserChat />
        </div>

        {/* send component */}
        <div className="mt-2 w-full">
          <div ref={messagesEndRef} ></div>

          <div>
            <form className="flex w-full sticky bottom-0 justify-between items-center  gap-2">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Send a message..."
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

function GuestChat(params) {
  return (
    <div className="card p-2 border rounded-lg shadow w-3/4 mb-2">
      Alice: Holaaaa amigo
    </div>
  );
}

function UserChat(params) {
  return (
    <div className="card p-2 border rounded-lg bg-blue-500 text-white ml-auto shadow w-3/4 mb-2">
      You: Holaaaa amigossjfkjdhf udhfushudkfhsd nidfiushfjhd jfhsuhfduhsiuf
      ifoshfusdhf
    </div>
  );
}
