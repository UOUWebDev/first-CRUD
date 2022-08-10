import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Posting from "./pages/Posting";
import Updating from "./pages/Updating";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import GlobalStyle from "./components/menuBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/updating/:id" element={<Updating />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
