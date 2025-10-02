import React, { useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(0);
  const handelAdd = () => {
    const newCount = Count + 10;
    setCount(newCount);
  };
  const handelDecrease = () => {
    const newCount = Count - 10;
    setCount(newCount);
  };
  const counterStyle = {
    border: "2px solid white",
    padding: "2rem 4rem",
  };
  return (
    <div style={counterStyle}>
      <h3>Count: {Count}</h3>
      <button onClick={handelAdd}>Increase</button>
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;
