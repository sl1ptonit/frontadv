import {useContext} from 'react';
import {ThemeContext} from "../../App";

function TodoItem(props) {

    const context = useContext(ThemeContext);
    console.log(context);

    return (
        <div style={{
                display: "flex",
                gap: '5px',
                border: '1px solid black',
                borderRadius: '5px',
                marginTop: '10px',
                textDecoration: props.todo.completed ? 'line-through' : 'none',
        }}>
            <span
                onClick={() => props.toggleTodo(props.todo.id)}
            >
                {props.todo.task}
            </span>
            <button onClick={() => props.deleteTodo(props.todo.id)}>
                X
            </button>
        </div>
    )
}

export default TodoItem;