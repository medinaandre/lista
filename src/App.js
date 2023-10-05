import React, { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefa([...tarefa, { name: novaTarefa, completed: false }]);
      setNovaTarefa("");
    }
  };

  const handleAlternarConcluido = (index) => {
    const tarefaAtualizada = [...tarefa];
    tarefaAtualizada[index].completed = !tarefaAtualizada[index].completed;
    setTarefa(tarefaAtualizada);
  };

  const handleRemoverTarefa = (index) => {
    const tarefaAtualizada = [...tarefa];
    tarefaAtualizada.splice(index, 1);
    setTarefa(tarefaAtualizada);
  };

  const handleTecla = (e) => {
    if (e.key === "Enter") {
      handleAdicionarTarefa();
    }
  }

  return (
    <div class="container">
      <div class="container__title">
        <img class="icone" src="./Porter.png" />
        <h1 class="title">Lista de Tarefas:</h1>
      </div>
      <div class="input">
        <input
          class="tarefa"
          type="text"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyPress={handleTecla}
        />
        <button class="botao" onClick={handleAdicionarTarefa}>
          Adicionar
        </button>
      </div>
      <div class="section">
        <ul class="input__on">
          {tarefa.map((task, index) => (
            <li key={index}>
              <input
                class="checkbox"
                type="checkbox"
                checked={task.completed}
                onChange={() => handleAlternarConcluido(index)}
              />
              {task.completed && <span>&#10003;</span>}
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "green" : "black",
                  opacity: task.completed ? 0.3 : 1,
                }}
              >
                {task.name}
              </span>
              <button
                class="remover"
                onClick={() => handleRemoverTarefa(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
