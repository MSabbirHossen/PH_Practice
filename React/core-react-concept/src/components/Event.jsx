import React from "react";

const Event = () => {
  const handelClick = () => alert("submit clicked.");
  function handelClick2() {
    alert("normal function btn");
  }
  return (
    <div>
      <button onClick={handelClick}>Arrow Function Submit</button>
      <br />
      <br />
      <button onClick={handelClick2}>normal function btn</button>
      <br />
      <br />
      <button
        onClick={function handelClick3() {
          alert("Inline function");
        }}
      >
        inline function btn
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          alert("Inline arrow function");
        }}
      >
        Inline arrow function" btn
      </button>
    </div>
  );
};

export default Event;
