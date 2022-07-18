import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarButton = styled.button`
  display: block;
  font-size: 20px;
`

export default function Header() {
  const handlerClick = () => alert("Not performed yet");

  return (
    <div>
        <ul className = "nav">
          <img 
          className = "logoImg"
          src="https://th.bing.com/th/id/OIP.TTuXNvbU-dlR4qNpiMjKcwHaGn?w=190&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="logo"
          />
          <li><button onClick = {handlerClick}>공지사항</button></li>
          <li><button onClick = {handlerClick}>소통게시판</button></li>
          <li><button onClick = {handlerClick}>건의게시판</button></li>
          <li><button onClick = {handlerClick}>자유게시판</button></li>
          <li><NavbarButton><Link to="/TestPage">Is this working?abcdefu</Link></NavbarButton></li>
          <ul className = "login">
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
          <img
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOXw0W7pV-_uU38-iNJfaQbfDMJyu6c0--Q&usqp=CAU"
          className = "menuLogo"
          alt="menu"
          />
        </ul>
      </div>
  )
}