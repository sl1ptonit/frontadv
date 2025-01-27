import {useDispatch} from "react-redux";
import { deleteTodo, toggleTodo} from "../../store/thunks/todoThunk";

function TodoItem(props) {

    const dispatch = useDispatch()

    const localToggleTodo = (todo) => {
        let updatedTodo = {...todo, completed: !todo.completed};
        dispatch(toggleTodo(updatedTodo))
    }

    return (
        <div style={{

                border: '1px solid black',
                borderRadius: '5px',
                marginTop: '10px',
                textDecoration: props.todo.completed ? 'line-through' : 'none',
        }}>
            <span
                onClick={() => localToggleTodo(props.todo)}
            >
                {props.todo.title}
            </span>
            <button onClick={() => dispatch(deleteTodo(props.todo.id)) }>
                X
            </button>
        </div>
    )
}

export default TodoItem;