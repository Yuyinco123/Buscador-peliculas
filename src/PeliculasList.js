import React from 'react'
import './PeliculasList.css';

function PeliculasList(props){
    return(
    <div className="scroll"> 
      <div className="peliculasList">
        {props.children}
      </div>
    </div>  
    )
  }

  export { PeliculasList };