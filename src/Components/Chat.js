import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChatData] = useState([]);

  const getChatData = async () => {
    const { data } = await axios.get("/chats");
    setChatData(data);
  };

  useEffect(() => {
    getChatData();
  }, []);

  return (
    <div>
      {chats.map((chatData) => (
        <div key={chatData._id}>{chatData.chatName}</div>
      ))}
    </div>
  );
};

export default Chat;
