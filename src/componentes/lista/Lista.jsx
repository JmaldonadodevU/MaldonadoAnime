// src/componentes/lista/Lista.jsx
import React, { useEffect, useState } from "react";
import { getTopAnime } from "../api/Api";
import { useNavigate } from "react-router-dom";
import "./Lista.css";

export default function Lista() {
  const [animes, setAnimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await getTopAnime();
      const formatted = data.map((a) => ({
        mal_id: a.mal_id,
        title: a.title,
        image: a.images?.jpg?.image_url,
        score: a.score,
        type: a.type,
      }));
      setAnimes(formatted);
    };
    load();
  }, []);

  return (
    <div className="lista-container">
      <h2>🔥 Lista Completa de Animes</h2>

      {animes.length === 0 ? (
        <p className="cargando">Cargando animes...</p>
      ) : (
        <ul className="anime-lista">
          {animes.map((a) => (
            <li
              key={a.mal_id}
              className="anime-item"
              onClick={() => navigate(`/anime/${a.mal_id}`)}
            >
              <img src={a.image} alt={a.title} className="anime-imagen" />
              <div className="anime-info">
                <h3>{a.title}</h3>
                <p>
                  {a.type} • ⭐ {a.score ?? "—"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

