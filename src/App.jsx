// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/navegacion/Nav";
import Home from "./componentes/home/Home";
import Lista from "./componentes/lista/Lista";
import Favoritos from "./componentes/favoritos/Fav";
import Informativo from "./componentes/informativo/inf";
import Original from "./componentes/original/Original";
import Detalles from "./componentes/detalles/Detalle";

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", paddingBottom: 80, background: "#000" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/Detalles/:id" element={<Detalles />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/informativo" element={<Informativo />} />
          <Route path="/original" element={<Original />} />
          <Route path="/anime/:id" element={<Detalles />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}
