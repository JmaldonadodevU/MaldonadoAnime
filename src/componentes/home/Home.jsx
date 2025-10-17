import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setAnimes(data.data))
      .catch(console.error);
  }, []);

  const filtered = animes.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Top Animes</h1>
      <input
        type="text"
        placeholder="Buscar anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="anime-grid">
        {filtered.map((anime) => (
          <div
            key={anime.mal_id}
            className="anime-card"
            onClick={() => navigate(`/detalles/${anime.mal_id}`)}
          >
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <h3>{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

