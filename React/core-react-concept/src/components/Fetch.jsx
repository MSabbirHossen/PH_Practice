import React, { use } from "react";

const Fetch = ({ apiPromise }) => {
  const posts = use(apiPromise);
  // console.log(posts);
  return (
    <div>
      <h1>API integration</h1>
      <h3>Total data: {posts.length} unit.</h3>
    </div>
  );
};

export default Fetch;
