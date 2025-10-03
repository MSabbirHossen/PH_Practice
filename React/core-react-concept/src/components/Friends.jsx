import React, { use } from "react";

const Friends = ({ dataPromise }) => {
  const friends = use(dataPromise);
  console.log(friends);
  return (
    <div>
      <h3>Async-await function data fetch.</h3>
      <p>data; {friends.length}</p>
    </div>
  );
};

export default Friends;
