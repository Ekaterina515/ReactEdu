import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList } from "./components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E90FF",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MessageList />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
