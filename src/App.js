import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Empresa from "./pages/empresa"
import Contato from "./pages/contato"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/empresa' element={<Empresa/>} />
        <Route path='/contato' element={<Contato/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
