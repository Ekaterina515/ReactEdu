import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css";

//

const App = () => {
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

      <input
        ref={ref}
        placeholder="enter message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setMessages([...messages, { author: "User", message: value }]);
          setValue("");
        }}
      >
        send message
      </button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
