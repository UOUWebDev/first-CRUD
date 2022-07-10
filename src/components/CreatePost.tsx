import React from "react";
import styled from "styled-components";

const CreateBox = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  :hover {
  }
`;

export default function CreatePost() {
  return (
    <CreateBox>
    <p className="createBox_img">
      <a href="/pages/Post.tsx">+</a>
    </p>
    </CreateBox>
  );
}