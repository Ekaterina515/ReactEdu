import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Message(props) {
  return (
    <h1>
      Project: <span class="title"> {props.title} </span>
    </h1>
  );
}

function App() {
  return (
    <div>
      <Message title="React Chat" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
