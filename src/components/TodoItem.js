import React from 'react';

function TodoItem(props){
    
    let getStyle = () =>{
        return{
            textDecoration : props.todo.completado ? 'line-through' : 'none',
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted'
        }
    }

    return(
        <div style={getStyle()}>           
            <p>
                <input type='checkbox' style={{marginRight : '10px'}} onChange={props.markComplete.bind(this, props.todo.id)}/>
                {props.todo.titulo}
            </p>
        </div>
    );
}

export default TodoItem;