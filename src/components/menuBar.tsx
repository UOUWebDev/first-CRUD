import { createGlobalStyle } from "styled-components";

const MenuBar = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  .nav {
  font-size: 20px;
  font-weight: bold;
  list-style-type: none;
  text-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  border: 1px solid black;
  padding: 20px;

  li {
    display: inline;
    min-width: 5em;
    margin: 0 2em;

    a {
      text-decoration: none;
      color: black;
      }

    }

  .logoImg {
    float: left;
    width: 30px;
    height: 30px;
    transform: rotate(90deg);
    }

  .menuLogo {
    font-size: 25px;
    float: right;
    width: 40px;
    height: 30px;
    }

  .login  {
    display: inline-block;
    font-size: 15px;
    text-align: center;
    margin-left: 10%;
    padding: 0px;

    li {
      display: inline;
      margin-right: 0px;
      }
    }
  }
`;

export default MenuBar;
