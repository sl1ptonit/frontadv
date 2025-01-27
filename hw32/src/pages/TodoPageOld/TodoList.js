import React, {Component} from 'react';
import TodoItem from "./TodoItem";

export default  function TodoList(props) {
    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
            {props.todos.map(todo => {
                return <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            })}

            {props.todos.length === 0 ? <p>Todo list is empty</p> : "" }

        </div>
    )
}