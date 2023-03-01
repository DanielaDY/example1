import React from 'react';
import './Componente2.css';

function Componente2(){
    const lenguajes=[
        {id:1, lenguaje:"JavaScript"},
        {id:2, lenguaje: "React"}
      ]
    return(
        <div className="App-componente2">
            <p>Los siguientes lenguajes estan en un arreglo y son desplegados en una lista:</p>
            
            <ul>
            {
              lenguajes.map(l=><li key={l.id}>{l.lenguaje}</li>)
            }
            </ul>
            </div>

    )
}

export default Componente2;