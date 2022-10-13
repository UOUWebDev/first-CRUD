import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface prosType {
  data: {
    _id: any;
    title: string;
    body: string;
  };
}

const Textbox = styled.div`
  background-color: white;
  padding: 20px;
  margin: 40px auto;
  width: 50%;
  position: relative;
  text-align: left;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  &:nth-child(2) {
    margin-top: 100px;
  }
`;

const Revise = styled.button`
  display: flex;
  float: right;
`;
const Delete = styled.button`
  display: absolute;
  float: right;
  bottom: 20px;
`;

export default function Post({ data }: prosType) {
  const navigate = useNavigate();
  const handleClickDelete = () => {
    axios
      .delete(`http://localhost:4000/post/${data?._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    alert("delete complete");
    window.location.reload();
  };

  const handleClickUpdate = () => {
    navigate(`/updating/${data?._id}`);
  };

  return (
    <Textbox>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
      <Delete onClick={handleClickDelete}>삭제</Delete>
      <Revise onClick={handleClickUpdate}>수정</Revise>
    </Textbox>
  );
}
