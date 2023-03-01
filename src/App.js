import React from 'react';
import './App.css';
import Componente1 from './Components/Componente1';
import Componente2 from './Components/Componente2';
import Componente3 from './Components/Componente3';
import Componente4 from './Components/Componente4';
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){

  return (
    <div className='App'>
      <Componente1></Componente1>
      <Componente2></Componente2>
      <Componente3></Componente3>
      <Componente4></Componente4>
      
    </div>
  );

}

export default App;
