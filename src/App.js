import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';


class App extends Component {
  
  state = {
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

   markComplete = (id) => {
    this.setState = ({todos: this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completado = !todo.completado
          console.log(todo.completado);
        }
         return todo;
      })})
    }

  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
