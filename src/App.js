import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/NavBar";

import Servicios from "./components/Servicios/Servicios";


import Contacto from "./components/Contacto/Contacto";
import Productos from "./components/Productos/Productos";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Agrega una ruta específica para la página de inicio */}
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    
  );
}

// Nuevo componente para la página de inicio
function Inicio() {
  return (
    <div className="home">
      <Header />
    
     
    </div>
  );
}

export default App;
