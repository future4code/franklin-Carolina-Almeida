import React, { useState } from 'react';
import './App.css';
import { Etapa1 } from "modulo1/rend-condicional-form/rend-condicional-form/src/components/Etapa1.js";
import { Etapa2 } from "modulo1/rend-condicional-form/rend-condicional-form/src/components/Etapa2.js";
import { Etapa3 } from "./Etapa3";
import { Final } from "./Final";

function App() {
  const [state, setEtapa]= useState(1)

  const renderizaEtapa = () => {
    switch (state) {
      case 1:
          return <Etapa2/>
        break;
      case 2:
          return <Etapa3/>
        break;
      default: 
        break;
    }

  }


  return (
    <div className="App">
     <button>Proxima etapa</button>

    </div>
  );
}

export default App;
