import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList } from "./components";
import "./index.module.css";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MessageList />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
