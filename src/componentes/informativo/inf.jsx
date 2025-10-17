// src/componentes/informativo/inf.jsx
import React from "react";

export default function Informativo() {
  return (
    <div style={{ padding: 20, color: "#fff" }}>
      <h2>Informativo</h2>
      <p>Esta sección puede explicar la fuente de datos (Jikan & MyAnimeList), cómo funciona la app y reglas del juego.</p>
      <ul>
        <li>API usada: https://api.jikan.moe/</li>
        <li>Puedes marcar animes como favoritos y verlos en la sección correspondiente.</li>
        <li>Juego: Adivina el anime por la imagen.</li>
      </ul>
    </div>
  );
}
