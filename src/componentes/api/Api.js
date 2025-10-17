export const getAllAnime = async () => {
  try {
    const res = await fetch("https://api.jikan.moe/v4/top/anime");
    if (!res.ok) throw new Error("Error al obtener animes");
    const data = await res.json();
    return data.data; // la API de Jikan devuelve los animes en data.data
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return [];
  }
};

export const getAnimeById = async (id) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    if (!res.ok) throw new Error("Anime no encontrado");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error al buscar anime:", error);
    return null;
  }
};
// src/componentes/api/Api.js

export async function getTopAnime() {
  try {
    const res = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await res.json();
    return data.data; // la API de Jikan devuelve un objeto con { data: [...] }
  } catch (error) {
    console.error("Error cargando los animes:", error);
    return [];
  }
}
