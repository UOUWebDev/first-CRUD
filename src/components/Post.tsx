import styled from "styled-components";
import React from "react";

const Textbox = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const Revise = styled.button`
  display: flex;
  float: right;
`
const Delete = styled.button`
  display: absolute;
  float: right;
  bottom: 20px;
`

export default function Post() {
  return(
    <div className="main">
      <Textbox>
        <h2>text for test</h2>
        <p>this is prototype of CRUD</p>
        <Delete>삭제</Delete>
        <Revise>수정</Revise>
      </Textbox>
    </div>
  );
}