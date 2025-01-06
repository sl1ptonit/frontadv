import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo } from "../../store/slices/todoSlice";

function TodoItem(props) {

    const dispatch = useDispatch()

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
                onClick={() => dispatch(toggleTodo(props.todo.id))}
            >
                {props.todo.task}
            </span>
            <button onClick={() => dispatch(deleteTodo(props.todo.id)) }>
                X
            </button>
        </div>
    )
}

export default TodoItem;