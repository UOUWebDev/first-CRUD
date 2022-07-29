import React from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import GlobalStyle from "../components/globalStyle";

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <Post />
      <CreatePost />
    </>
  );
}