import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState("completas");
  const [filtro, setFiltro] = useState("pendentes")
    
  useEffect() => {
    () => {
      id: Date.now(),
      texto: 'Texto da primeira tarefa',
      completa: false
    },
    []
  };

  useEffect() => {
    () => {
      id: Date.now(), // Explicação abaixo
      texto: 'Texto da segunda tarefa',
      completa: true
    },
    []
  };

  onChangeInput = (event) => {

  }

  criaTarefa = () => {
    id: Date.now(), // aqui, pode deixar o valor Date.now() para todas as tarefas as serem criadas
    texto: // aqui, o texto da tarefa virá do input controlado guardado no estado
    completa: false 
  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {

  }

 
    const listaFiltrada = tarefas.filter(tarefa => {
      switch (filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    });
    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={inputValue} onChange={onChangeInput}/>
          <button onClick={criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={filtro} onChange={onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }


export default App
