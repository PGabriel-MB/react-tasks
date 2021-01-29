import React from 'react';
import './App.css';

import Header from "./components/layout/Header/Header";
import TaskList from "./components/layout/TaskList/TaskList";
import AddFAB from "./components/layout/AddFAB/AddFAB";

import Task from "./models/Task";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList tasks={Task} />
      <AddFAB tasks={Task}/>
    </div>
  );
}

export default App;
