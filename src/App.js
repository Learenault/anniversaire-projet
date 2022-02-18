import './App.css';
import {personnes} from './data';
import React, {useState, useEffect} from 'react';
import Liste from './Liste';

function App() {
  return (
    <main>
      <section>
     <h1>{personnes.length} anniversaires aujourd'hui</h1> 
     {
       personnes.map(personne =>{
         return(<Liste key={personne.nom} pers={personne} />)
       })
     }
     <button>Effacer</button>
     </section>
    </main>
  );
}

export default App;
