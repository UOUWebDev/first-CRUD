import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Posting from './pages/Posting';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import GlobalStyle from "./components/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;