import { useEffect, useState } from "react";
import "./Original.css";

export default function Original() {
  const [animes, setAnimes] = useState([]);
  const [pregunta, setPregunta] = useState(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data.data);
        nuevaPregunta(data.data);
      });
  }, []);

  const nuevaPregunta = (data) => {
    const opciones = data.sort(() => 0.5 - Math.random()).slice(0, 4);
    const correcta = opciones[Math.floor(Math.random() * 4)];
    setPregunta({ opciones, correcta });
    setMensaje("");
  };

  const verificar = (opcion) => {
    if (opcion.mal_id === pregunta.correcta.mal_id) {
      setMensaje("🎉 ¡Correcto!");
    } else {
      setMensaje(`❌ Incorrecto. Era ${pregunta.correcta.title}`);
    }
    setTimeout(() => nuevaPregunta(animes), 2000);
  };

  if (!pregunta) return <p className="cargando">Cargando juego...</p>;

  return (
    <div className="juego-container">
      <h1>🎮 Adivina el Anime</h1>
      <img
        src={pregunta.correcta.images.jpg.image_url}
        alt="anime"
        className="imagen-anime"
      />
      <div className="opciones">
        {pregunta.opciones.map((a) => (
          <button key={a.mal_id} onClick={() => verificar(a)}>
            {a.title}
          </button>
        ))}
      </div>
      <p className="mensaje">{mensaje}</p>
    </div>
  );
}
