import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const style = {
        float:'right'
    }
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <button style={style} onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            )
        })  
    ) : (
        <p className="center">You have no todo's left!!!</p>
    ) 

    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;