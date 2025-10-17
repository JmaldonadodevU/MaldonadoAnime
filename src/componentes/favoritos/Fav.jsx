import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Favoritos.css";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(stored);
  }, []);

  const eliminarFavorito = (id) => {
    const nuevos = favoritos.filter((a) => a.mal_id !== id);
    setFavoritos(nuevos);
    localStorage.setItem("favoritos", JSON.stringify(nuevos));
  };

  return (
    <div className="favoritos-container">
      <h1>💖 Tus Animes Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No tienes animes favoritos aún.</p>
      ) : (
        <div className="favoritos-grid">
          {favoritos.map((anime) => (
            <div key={anime.mal_id} className="favorito-card">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                onClick={() => navigate(`/detalles/${anime.mal_id}`)}
              />
              <h3>{anime.title}</h3>
              <button onClick={() => eliminarFavorito(anime.mal_id)}>
                ❌ Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
