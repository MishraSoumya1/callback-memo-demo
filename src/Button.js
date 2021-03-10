import React from "react";

const Button = ({ text, handleClick }) => {
  console.log(`${text} button rendered`);
  return <button onClick={handleClick}>{text}</button>;
};

export default React.memo(Button);
