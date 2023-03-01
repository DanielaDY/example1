import React from 'react';
import './Componente3.css';

function Componente3(){
    const temas=[
        {id:1, tema:"Tipos de componentes"},
        {id:2, tema: "Funciones y eventos"},
        {id:3, tema: "Uso de varios componentes"}
      ]
    return(
        <div className="App-componente3">
            <p>En este ejercicio vimos:</p>
            <ol>
              {
                temas.map(t=><li key={t.id}>{t.tema}</li>)
              }
            </ol>
            </div>
    )
}
export default Componente3;