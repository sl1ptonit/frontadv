const todoInput = document.querySelector('#textInput');
const addTodoBtn = document.querySelector('#addTodo');
const todoList = document.querySelector('.todoList');

addTodoBtn.addEventListener('click', (e) => {
    if (!todoInput.value) {
        return;
    }

    const newTodo = document.createElement('div');
    newTodo.textContent = todoInput.value;
    newTodo.classList.add('todo');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    })

    newTodo.appendChild(deleteButton);
    todoList.appendChild(newTodo);

    todoInput.value = '';
});

