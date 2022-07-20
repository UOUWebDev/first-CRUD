import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarButton = styled.button`
   border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
`
const NavbarLoginButton = styled.button`
  
`

export default function Header() {
  
  return (
    <div>
      <ul className="nav">
        <img
          className="logoImg"
          src="https://th.bing.com/th/id/OIP.TTuXNvbU-dlR4qNpiMjKcwHaGn?w=190&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="logo"
        />
        <li><NavbarButton><Link to="/TestPage">공지사항</Link></NavbarButton></li>
        <li><NavbarButton><Link to="/TestPage">소통게시판</Link></NavbarButton></li>
        <li><NavbarButton><Link to="/TestPage">건의게시판</Link></NavbarButton></li>
        <li><NavbarButton><Link to="/TestPage">자유게시판</Link></NavbarButton></li>

        <ul className="login">
          <li><NavbarButton><Link to="/TestPage">로그인</Link></NavbarButton></li>
          <li><NavbarButton><Link to="/TestPage">회원가입</Link></NavbarButton></li>
        </ul>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOXw0W7pV-_uU38-iNJfaQbfDMJyu6c0--Q&usqp=CAU"
          className="menuLogo"
          alt="menu"
        />
      </ul>
    </div>
  )
}