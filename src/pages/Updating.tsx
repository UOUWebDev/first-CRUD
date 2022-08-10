import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MenuBar from "../components/menuBar";

const Postbox = styled.div`
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
`;

const Title = styled.input`
  display: flex;
  text-align: center;
  width: 90%;
  height: 10%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

const Body = styled.input`
  display: flex;
  text-align: left;
  vertical-align: top;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  height: 70%;
`;

const PostButton = styled.button`
  display: flex;
  margin-top: 10px;
  float: right;
`;

export default function Updating() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/${id}`)
      .then((res) => {
        setTitle(res?.data.title);
        setBody(res?.data.body);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const bodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const updateButton = () => {
    try {
      axios.patch(`http://localhost:5000/post/${id}`, {
        title,
        body,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Postbox>
      <MenuBar />
      <Title value={title} onChange={titleChange} />
      <Body value={body} onChange={bodyChange} />
      <PostButton
        onClick={() => {
          navigate("/");
          updateButton();
        }}
      >
        수정
      </PostButton>
    </Postbox>
  );
}
