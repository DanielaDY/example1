import React from 'react';
import './Componente1.css';

function Componente1(){
    const sem='Semana 5';
    return(
        <div className="App-componente1">
            <h1>Semana 5</h1>
            <h6>Soy un componente tipo función que despliega una constante que dice {sem}</h6>
        </div>

    )
}

export default Componente1;