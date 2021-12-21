import React, { useState } from 'react';
import './App.css';

import Header from "./components/layout/Header/Header";
import TaskList from "./components/layout/TaskList/TaskList";
import AddFAB from "./components/layout/AddFAB/AddFAB";

import Task from "./data/Task";

function App() {
  const [tasks, setTasks] = useState([...Task]);

  return (
    <div className="App">
      <Header headerText="Minha Lista de Tarefas" />
      <TaskList tasks={tasks} />
      <AddFAB tasks={tasks} configTasks={setTasks} />
    </div>
  );
}

export default App;
