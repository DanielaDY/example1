import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Componente4(){
  
    return(
        
            <div className="App-componente4">
            <Button variant="primary" onClick={()=>console.log('Ya le diste clic')}>No dar click</Button>
            </div>
    )
}
export default Componente4;