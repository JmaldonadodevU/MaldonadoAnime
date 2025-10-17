// src/componentes/detalles/Detalles.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalles() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await res.json();
      setAnime(data.data);
    };
    load();
  }, [id]);

  if (!anime) return <p style={{ color: "#fff" }}>Cargando detalles...</p>;

  return (
    <div style={{ padding: 20, color: "#fff" }}>
      <h2>{anime.title}</h2>
      <img
        src={anime.images?.jpg?.large_image_url}
        alt={anime.title}
        width="200"
        style={{ borderRadius: 8 }}
      />
      <p><strong>Tipo:</strong> {anime.type}</p>
      <p><strong>Puntuación:</strong> ⭐ {anime.score ?? "—"}</p>
      <p><strong>Episodios:</strong> {anime.episodes ?? "Desconocido"}</p>
      <p><strong>Sinopsis:</strong> {anime.synopsis}</p>

      <button
        style={{
          background: "#f47521",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => {
          const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
          const existe = favoritos.some((f) => f.mal_id === anime.mal_id);
          if (!existe) {
            favoritos.push(anime);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
            alert("¡Agregado a favoritos!");
          } else {
            alert("Ya está en favoritos ❤️");
          }
        }}
      >
        ❤️ Agregar a Favoritos
      </button>
    </div>
  );
}

