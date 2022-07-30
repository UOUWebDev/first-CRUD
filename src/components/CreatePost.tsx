import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CreateBox = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
  margin: 40px auto;
  width: 50%;
  height: 15%;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const CreateBoxImg = styled.button`
  border: none;
  background-color: transparent;
  font-size: 150px;
  color: lightblue;
`;

export default function CreatePost() {
  return (
    <CreateBox>
      <CreateBoxImg>
        <Link to="/Posting">+</Link>
      </CreateBoxImg>
    </CreateBox>
  );
}
