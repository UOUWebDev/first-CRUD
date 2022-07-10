import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import Posting from './pages/Posting';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posting" element={<Posting />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;