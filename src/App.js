import './App.css';
import {personnes} from './data';
import React, {useState} from 'react';
import Liste from './Liste';

function App() {
  const [anniv, setAnniv] = useState([]);

  const update = ()=>{
    console.log();
  }
  return (
    <div className="App">
      <div className="Anniversaire">
     <h1>{personnes.length} anniversaires aujourd'hui</h1> 
     {
       personnes.map(personne =>{
         return(<Liste key={personne.nom} pers={personne} />)
       })
     }
     <button onClick={update}>Effacer</button>
     </div>
    </div>
  );
}

export default App;
