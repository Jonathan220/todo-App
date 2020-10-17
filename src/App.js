import React from 'react';
import './App.css';
import Todos from './components/Todos';

const state = {
  todos: [
      {
          id: 1,
          titulo: 'Fazer café',
          completado: true
      },
      {
          id: 2,
          titulo: 'Tomar banho',
          completado: false
      },
      {
          id: 3,
          titulo: 'Lavar a roupa',
          completado: false
      }
  ]
}

function App() {
  return (
    <div className="App">
      <Todos todos={state.todos}/>
    </div>
  );
}

export default App;
