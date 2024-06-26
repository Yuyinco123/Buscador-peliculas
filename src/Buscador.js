import React from 'react'
import './Buscador.css';
import icono from './icono.png'

function Buscador({

  searchValue,
  setSearchValue,
}

){

    return(
      <div className="Buscar">
        <p className="texto">JorgeCompany</p>
        <img  className="icono" src={ icono } alt="icono" />
        <input placeholder='Buscar'
          className="buscando"
          src={ icono }
          value={searchValue}
          onChange={
              (event)  => {
                setSearchValue(event.target.value);
            }
          }
        />

       </div>

    )
  }

export { Buscador };