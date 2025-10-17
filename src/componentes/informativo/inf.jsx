// src/componentes/informativo/inf.jsx
import React from "react";
import logo from "../../assets/Logo.png";


export default function Informativo() {
  return (
    <div style={{ padding: 20, color: "#fff" }}>
      <img
        src={logo}
        alt="Logo de Banderas"
        width="200"
        height="200"
        style={{ verticalAlign: "middle" }}
      />
      <h2>Informativo</h2>
      <p>Julian leonardo Maldonado perez <br />Esta sección puede explicar la fuente de datos (Jikan & MyAnimeList), cómo funciona la app y reglas del juego. <br />Se desarrolló una aplicación Android con Jetpack Compose que utiliza una WebView para mostrar el sitio https://addmaldo.netlify.app, el cual consume la API de anime para mostrar información relacionada con series animadas.

        Además, se personalizó el ícono y tema visual con los colores e identidad de Crunchyroll, manteniendo un estilo similar a la plataforma original.</p>
      <ul>
        <li>API usada: https://api.jikan.moe/</li>
        <li>Puedes marcar animes como favoritos y verlos en la sección correspondiente.</li>
        <li>Juego: Adivina el anime por la imagen.</li>
      </ul>
    </div>
  );
}
