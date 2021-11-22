// import classnames from "classnames";

// const className = classnames("class1", "class2", {
//   botMessage: message.author === "Bot"
// });

export const Message = ({ message }) => {
  return (
    <div>
      <div>{message.author}</div>
      <div>{message.message}</div>
      <div>11:00</div>
      <hr />
    </div>
  );
};
