import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';


function App(){
  let [state, setState] = useState(
    {
        todos: [
            {
                id: 1,
                titulo: 'Fazer café',
                completado: false
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
  )

   let markComplete = (id) => {
     setState = { todos : state.todos.map((todo) => {
       if(todo.id === id){
         todo.completado = !todo.completado
       }
       return todo
     })}
     console.log(setState)
    }

    return (
      <div className="App">
        <Todos todos={state.todos} markComplete={markComplete}/>
      </div>
    );
  }


export default App;
