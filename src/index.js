import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Addition from './Components/Addition';
import Substraction from './Components/Substraction';
import Multiplication from './Components/Multiplication';
import Division from './Components/Division';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
      <Router>
        <header>
          <Home />
        </header>
        <Routes>
          <Route path="/Addition" element={<Addition />} />
          <Route path="/Substraction" element={<Substraction />} />
          <Route path="/Multiplication" element={<Multiplication />} />
          <Route path="/Division" element={<Division />} /> 
        </Routes>
      </Router>
    </main>
  </React.StrictMode>
);