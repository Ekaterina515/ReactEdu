import React, { useEffect, useRef, useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useStyles } from "./use-styles";
// import { makeStyles } from "@mui/styles";
// import { Button, Input } from "@mui/material";
// import "./message-list.module.css";
// import { style } from "@mui/system";

//

export const MessageList = () => {
  const styles = useStyles();
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", message: "Hello! How can I help you?" },
        ]);
      }, 2000);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        { author: "User", message: value, date: new Date() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.wrapper}>
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}

      <Input
        fullWidth
        className={styles.input}
        ref={ref}
        placeholder="enter message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.icon} onClick={sendMessage} />
          </InputAdornment>
        }
      />
    </div>
  );
};
