//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { Buscador } from './Buscador';
import { Categorias } from './Categorias';
import { PeliculasList } from './PeliculasList';
import { Peliculas } from './Peliculas';
import { fetchMovies } from './servicio';
import './App.css';

let defaultPelis = [

  { text: "Avengers: Endgame", complete: true },
  { text: "super mario movie", complete: true },
  { text: "scream 5", complete: false },

]

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log('pruebas del buscador '+ searchValue);
  
  const [movies, setMovies] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos'); // Estado para la categoría seleccionada
  
 ///////////////////////////////////////////////////
 const [shows, setShows] = useState([]);
 const [error, setError] = useState('');

 useEffect(() => {
     fetchShows();
 }, []); // Empty dependency array to run the effect only once on mount

 const fetchShows = async () => {
     try {
         const response1 = await fetch(`https://api.tvmaze.com/search/shows?q=series`);
         const response2 = await fetch(`https://api.tvmaze.com/search/shows?q=movies`);
         if (!response1.ok || !response2.ok) {
             throw new Error('Network response was not ok');
         }
         const data1 = await response1.json();
         const data2 = await response2.json();
         const combinedShows = [...data1, ...data2]; // Combine results of series and movies
         setShows(combinedShows.map(show => ({
             ...show,
             show: {
                 ...show.show,
                 summary: stripHtmlTags(show.show.summary) // Limpiar etiquetas HTML del resumen
             }
         })));
         setError('');
     } catch (error) {
         setError('There was a problem fetching the data.');
         setShows([]);
     }
 };

 console.log("shows " + JSON.stringify(shows));

 const stripHtmlTags = (htmlString) => {
     // Crear un elemento HTML temporal para eliminar las etiquetas
     const tempDiv = document.createElement('div');
     tempDiv.innerHTML = htmlString;
     return tempDiv.textContent || tempDiv.innerText || ''; // Obtener el texto sin etiquetas
 };


  
 const categorias = (categoria) => {
  setCategoriaSeleccionada(categoria); // Función para actualizar la categoría seleccionada
  console.log("categoria" + JSON.stringify(categoria));
};

const filtrado = shows.filter(
  show => {
    // Filtrar por categoría seleccionada
    if (categoriaSeleccionada === 'Todos') {
      return true && show.show.name.toLowerCase().includes(searchValue.toLowerCase()); // Mostrar todos si la categoría seleccionada es 'Todos'
    } else {
      return show.show.genres && show.show.genres.includes(categoriaSeleccionada) && show.show.name.toLowerCase().includes(searchValue.toLowerCase());
    }
  }
);



  return (
    <React.Fragment>

      <Buscador 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />  

      <Categorias seleccionarCategoria ={categorias} />     

      <PeliculasList>    
   
          <Peliculas  shows={filtrado}/>  
    
      </PeliculasList>    
    </React.Fragment>
  );
}

export default App;
