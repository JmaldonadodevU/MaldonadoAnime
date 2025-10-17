// src/componentes/navegacion/nav.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function NavBar() {
  return (
    <nav  className="navbar">
      <div className="logo">🍥 CrunchyAnime</div>
      <div className="links">
      <Link to="/">🏠 Inicio</Link>
      <Link to="/lista">🌍 Lista</Link>
      <Link to="/favoritos">⭐ Favoritos</Link>
      <Link to="/informativo">📘 Informativo</Link>
      <Link to="/original">🎮 Original</Link>
      </div>
    </nav>
  );
}
