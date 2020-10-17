import React from 'react';
import TodoItem from './TodoItem';

function Todos(prop){
    return (prop.todos.map((todo) => {
        return(
                <TodoItem key={todo.id} todo={todo} />
        )
    }))
}

export default Todos;
