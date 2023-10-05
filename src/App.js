import React, { useState } from "react";
import './App.css';

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




  return (
    <div>
      <h1 class="title">Lista de Tarefas:</h1>
      <div class="input">
        <input class="tarefa"
          type="text"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button class="botao" onClick={handleAdicionarTarefa}>Adicionar</button>
      </div>
      <ul class="input__on">
        {tarefa.map((task, index) => (
          <li key={index}>
            {task.completed && <span>&#10003;</span>}
            <span
              style={{
                textDecoration: task.completed,
                color: task.completed ? "green" : "red",
              }}
            >
              {task.name}
            </span>
            <button class="botao__concluir" onClick={() => handleAlternarConcluido(index)}>
              {task.completed ? "Desfazer" : "Concluir"}
            </button>
            <button class="botao__remover" onClick={() => handleRemoverTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
