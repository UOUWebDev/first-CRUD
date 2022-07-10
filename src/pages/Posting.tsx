import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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

const PostTitle = styled.input`
  display: flex;
    text-align: center;
    width: 90%;
    height: 10%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
`

const PostContent = styled.input`
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
  return (
    <Postbox>
      <PostTitle></PostTitle>
      <PostContent></PostContent>
      <PostButton>작성</PostButton>
    </Postbox>
  );
}

export default Post;