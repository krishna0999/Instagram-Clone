import React from "react";
import Post from "./Post";
import "./Body.css";

function Body({ posts }) {
  return (
    <div className="appBody">
      {posts.map((post) => (
        <Post key={post.id} post={post.data} />
      ))}
    </div>
  );
}

export default Body;
