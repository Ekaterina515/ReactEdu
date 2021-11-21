import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@mui/material";
import "./message-list.module.css";

//

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  // eslint-disable-next-line no-undef
  const ref = useRef(null);

  useEffect(() => {
    const lastMessages = messages[messages.lenght - 1];
    let timerId = null;

    if (messages.lenght && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", message: "Hello! How can I help you?" },
        ]);
      }, 500);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div>{message.message}</div>
      ))}

      <Input
        ref={ref}
        placeholder="enter message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        onClick={() => {
          setMessages([...messages, { author: "User", message: value }]);
          setValue("");
        }}
      >
        send message
      </Button>
    </div>
  );
};
