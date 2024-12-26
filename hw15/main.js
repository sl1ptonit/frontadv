const todoInput = document.querySelector('#todoInput');
const addTodoBtn = document.querySelector('#addTodo');
const todoList = document.querySelector('.todoList');

let todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];

function renderList() {
    todoList.innerHTML = '';
    todoItems.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.dataset.id = todo.id;
        todoElement.classList.add('todoItem');

        const spanElement = document.createElement('span');

        if (todo.completed) {
            spanElement.classList.add('completedTask');
        } else {
            spanElement.classList.remove('completedTask');
        }

        spanElement.textContent = todo.task;
        spanElement.addEventListener('click', (e) => {
            toggleStatus(todo.id);
            renderList();
        })

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', (e) => {
            deleteTodo(todo.id);
            renderList();
        })

        todoElement.appendChild(spanElement);
        todoElement.appendChild(deleteButton);
        todoList.appendChild(todoElement);
        saveTodoToLocalStorage();
    })
}

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!todoInput.value) {
        return;
    }

    const lastId = todoItems[todoItems.length - 1]?.id || 0;
    const newTodo = {id: lastId + 1, task: todoInput.value, completed: false};

    todoItems.push(newTodo);
    todoInput.value = '';

    renderList();
});

function toggleStatus(id) {
    todoItems = todoItems.map(todo => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo
    })
}

function deleteTodo(id) {
    todoItems = todoItems.filter(todo => todo.id !== id);
}

function saveTodoToLocalStorage() {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

renderList();

