import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';

function Post() {
  return (
    <div className="postBox">
      <input className = "postTitle"></input>
      <input className = "postContent"></input>
      <button className = "postButton">작성</button>
  </div>
  );
}

export default Post;