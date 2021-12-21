import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post__head">
        <Avatar sx={{ width: "35px", height: "35px", margin: "10px" }} />
        <h3>{post.username}</h3>
      </div>
      <div className="post__image">
        <img src={post.postImage} alt="" />
      </div>
      <div className="post__foot">
        <div className="post__username">
          <h3>{post.username}</h3>
          <p>{post.caption}</p>
        </div>
        <div className="post__comments"></div>
      </div>
    </div>
  );
}

export default Post;
