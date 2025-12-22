import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  const handecountere = () => {
    setcount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handecountere}>Increase</button>
    </>
  );
};

export default Counter;
