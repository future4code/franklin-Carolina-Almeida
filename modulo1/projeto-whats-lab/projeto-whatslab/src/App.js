import React, { useState } from "react";
import './App.css';

function App() {

  const Remetente = () => {

    const [remetente, setRemetente] = useState(["Carolina", "Aurora"]);
  
    const [valorInputRemetente, setvalorInputRemetente] = useState("");
  
    const adicionaRemetente = () => {
   
      const novoRemetente = valorInputRemetente;
      const novoRemetentes = [novoRemetente, ...remetente];
  
       setRemetente(novoRemetentes);
    };
  
    const onChangeInputRemetente = (event) => {
     
  
    
      setvalorInputRemetente(event.target.value);
    };
  
   
    const lista = remetente.map((remetente) => {
      return <p>{remetente}</p>;
    });

  return (
    <div>
      <h1>Mensagens</h1>
      <div>
        <input
          value={valorInputRemetente}
          onChange={onChangeInputRemetente}
          placeholder={"Nome"}
       />
        <button onClick={adicionaRemetente}>Adicionar</button>
      </div>
      <div>{lista}</div>
   </div>
  );
}

export default App;
