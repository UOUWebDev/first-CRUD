import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from "react-router-dom";

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
`

const Title = styled.input`
  display: flex;
    text-align: center;
    width: 90%;
    height: 10%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
`

const Body = styled.input`
  display: flex;
    text-align: left;
    vertical-align: top;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    height: 70%;
`

const PostButton = styled.button`
  display: flex;
    margin-top: 10px;
    float: right;
`

function Post() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  
  const bodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value)
  }

  const postButton = () => {
    console.log({title, body});
    try {
      axios.post('http://localhost:5000/posts', {
        title,
        body
      }) 
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <Postbox>
      <Title value={title} onChange={titleChange} />
      <Body value={body} onChange={bodyChange}/>
      <PostButton onClick={postButton}><Link to="/">작성</Link></PostButton>
    </Postbox>
  );
}

export default Post;