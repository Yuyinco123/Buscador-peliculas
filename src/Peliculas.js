import React, { useEffect, useState } from 'react';
import './Peliculas.css';

function Peliculas(

    props
 
) {
    const { shows } = props;

    return (
        <div className="lista-3x3">
            {shows.map(show => (
                <div className="lista-3x3-item" key={show.show.id}>
                    <img src={show.show.image?.medium || 'Informacion no disponible'} alt={show.show.image?.medium || 'Informacion no disponible'} />
                    <p className="titulo">{show.show.name ? show.show.name : 'Informacion no disponible'}</p>
                    <p className="parrafo">{show.show.summary ? show.show.summary : 'Informacion no disponible'}</p>
                    <p className="categorias">{show.show.genres && show.show.genres.length !== 0 ? `Categorias: ${show.show.genres.join(', ')}` : 'informacion no disponible'}</p>

                </div>
            ))}
        </div>
    );
}

export default Peliculas;


  


/*function Peliculas(props){
    return(
        <div className="lista-3x3">
   
            <div className="lista-3x3-item">
                <img src={ img1 } alt="Imagen 1" />
                <p > {props.text}</p>
                <p className="parrafo">Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.</p>
            </div> 

            <div className="lista-3x3-item">
                <img src={ img2 } alt="Imagen 2" />
                <p > {props.text} </p>
                <p className="parrafo">Dos hermanos plomeros, Mario y Luigi, caen por las alcantarillas y llegan a un mundo subterráneo mágico en el que deben enfrentarse al malvado Bowser para rescatar a la princesa Peach, quien ha sido forzada a aceptar casarse con él..</p>
            </div> 

            <div className="lista-3x3-item">
                <img src={ img3 } alt="Imagen 3" />
                <p > {props.text} </p>
                <p className="parrafo">Veinticinco años después de la masacre ocurrida en Woodsboro, un nuevo asesino se pone la legendaria máscara para matar adolescentes.</p>
            </div> 

        </div>
    )
  }*/

  export { Peliculas };