import React from 'react';

function Todos() {
    const state = {
    todos: [
        {
            id: 1,
            titulo: 'Fazer café',
            Completado: false
        },
        {
            id: 2,
            titulo: 'Tomar banho',
            Completado: false
        },
        {
            id: 3,
            titulo: 'Lavar a roupa',
            Completado: false
        }
    ]
    }
    console.log(state.todos);
    return (
    <div>
      <h1>Componente Todo</h1>
    </div>
  );
}

export default Todos;
