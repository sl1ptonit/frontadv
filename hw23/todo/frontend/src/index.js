const apiUrl = 'http://localhost:3000';

//API
async function getTodos() {
    const response = await fetch(`${apiUrl}/todos`);
    const todos = await response.json();
    renderTodos(todos);
}

async function deleteTodo(todoId) {

    const task = document.querySelector('#task').value;

    await fetch(`${apiUrl}/todos/${todoId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            task
        }),
    });

    await getTodos();
}

async function addTodo(e) {
    e.preventDefault();

    const task = document.querySelector('#task').value;

    await fetch(`${apiUrl}/todos`, {
	method: 'POST',
	headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
	        task
	    }),
    });

    await getTodos();
    document.querySelector('#addTodoForm').reset();
}

async function editTodo(e) {
    e.preventDefault();

    const id = document.getElementById('editId').value;
    const task = document.getElementById('editTask').value;

    const updatedTask = {id, task};

    await fetch(`${apiUrl}/todos/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedTask),
    })

    document.querySelector('#editModal').classList.add('hidden');
    await getTodos();
}

//DOM

function renderTodos(todos)
{
    const todoList = document.querySelector('#todoList');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('li')
        todoItem.className = 'todo-item';

        todoItem.innerHTML = `
                <span>
                    ${todo.task}
                </span>
                <div>
                    <button class="edit" onclick="openEditModal('${todo.id}', '${todo.task}')">Edit</button>
                    <button class="delete" onclick="deleteTodo(${todo.id})">Delete</button>                    
                </div>
            `;
        todoList.appendChild(todoItem);
    });
}

function openEditModal(id, task) {
    document.getElementById('editModal').classList.remove('hidden');
    document.getElementById('editId').value = id;
    document.getElementById('editTask').value = task;

}

document.getElementById('cancelEdit').addEventListener('click', () => {
    document.getElementById('editModal').classList.add('hidden');
});

document.querySelector('#addTodoForm').addEventListener('submit', addTodo)
document.querySelector('#editTodoForm').addEventListener('submit', editTodo)

getTodos();

