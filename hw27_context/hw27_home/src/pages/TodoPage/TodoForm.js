import {useContext, useState} from 'react';

function TodoForm(props)  {

    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        props.addTodo(task);
        setTask('');
    }

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <input
                type='text'
                placeholder='Enter new todo'
                onChange={handleChange}
                />
            <button onClick={handleSubmit}>Add new task</button>
        </div>
    )

}

export default TodoForm;