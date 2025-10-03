import React from "react";

const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="card">
      <h4>Post Title; {title}</h4>
      <p>Post body: {body}</p>
    </div>
  );
};

export default Post;
