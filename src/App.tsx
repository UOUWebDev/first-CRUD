import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Posting from './pages/Posting';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;