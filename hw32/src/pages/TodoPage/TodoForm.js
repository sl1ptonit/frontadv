import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../store/thunks/todoThunk";
import {useState} from "react";

export default function TodoForm()  {

    const [newTodo, setNewTodo] = useState({title: ''})
    const dispatch = useDispatch();


    const handleAddTodo = () => {
        if (newTodo.title.trim() ) {
            dispatch(addTodo({userId: 1, title: newTodo.title, completed: false}))
            setNewTodo({title: ''})
        }
    }

    return (
        <>
            <div>
                <label>New todo:</label>
                <input
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
                    type='text' name='title'
                />
            </div>
            <button onClick={handleAddTodo}>Add new task</button>
        </>
    )
}