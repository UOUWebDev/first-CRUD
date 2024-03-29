import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  .header {
    font-size: 20px;
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
  }

  .nav li {
  display: inline;
  min-width: 5em;
  margin: 0 2em;
  }

  .nav li button:hover {
  animation-name: drawingLine;
  animation-duration: 10s;
  animation-delay: 0.1s;
  animation-direction: reverse;
  animation-timing-function: linear;
  }

  @keyframes drawingLine {
  from {text-decoration: none;}
  to {
    text-decoration: underline;
    text-decoration-color: lightblue;
    }
  }

  .logoImg {
  float: left;
  width: 30px;
  height: 30px;
  transform: rotate(90deg);
  }

  .nav .menuLogo {
  font-size: 25px;
  float: right;
  width: 40px;
  height: 30px;
  }

  .nav .login  {
  display: inline-block;
  font-size: 15px;
  text-align: center;
  margin-left: 10%;
  padding: 0px;
  }

  .nav .login li {
  display: inline;
  margin-right: 0px;
  }
`;

export default GlobalStyle;
