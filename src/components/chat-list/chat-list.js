import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const { roomId } = useParams();
  const [chats] = useState(["CHAT #1", "CHAT #2", "CHAT #3"]);

  return (
    <List component="nav">
      {chats.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === roomId} />
        </Link>
      ))}
    </List>
  );
};
