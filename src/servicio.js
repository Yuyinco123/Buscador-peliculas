// tmdbService.js

// Función para realizar una solicitud GET a la API de TMDb
export const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=a5790bea1e6e7ab4f4647aeaa743eab5`;
  console.log("url" + JSON.stringify(url));
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener datos');
    }
    //test = response.json();
    //console.log("test" + JSON.stringify(test));
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return { error: true, message: error.message };
  }
};

