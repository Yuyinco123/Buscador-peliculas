import React from 'react';
import './Categorias.css';

function Categorias({ seleccionarCategoria }) {

  const handleClick = (categoria) => {
    seleccionarCategoria(categoria); // Llamar a la función para seleccionar categoría en App.js
  };

  return (
    <div className="categorias">
      <ul>
        <li>
          <button onClick={() => handleClick('Comedy')}>Comedia</button>
        </li>
        <li>
          <button onClick={() => handleClick('Drama')}>Drama</button>
        </li>
        <li>
          <button onClick={() => handleClick('Action')}>Acción</button>
        </li>
        <li>
          <button onClick={() => handleClick('Adventure')}>Aventura</button>
        </li>
        <li>
          <button onClick={() => handleClick('Mystery')}>Misterio</button>
        </li>
        <li>
          <button onClick={() => handleClick('Adult')}>Adultos</button>
        </li>
        <li>
          <button onClick={() => handleClick('Todos')}>Todos</button>
        </li>
      </ul>
    </div>
  );
}

export { Categorias };
