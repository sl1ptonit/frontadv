const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
   res.json(todos);
});

app.post('/todos', (req, res) => {

    const newTodo = {...req.body, id: todos.length + 1}
    todos.push(newTodo);
    res.status(200).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const { id} = req.params;
    const {task} = req.body;

    const todo =  todos.find(todo => todo.id === +(id))

    if (!todo) {
        res.status(404).json({message: 'Todo not found'});
    } else {

        todo.task = task || todo.task;
        res.status(200).json(todo);
    }
});

app.delete('/todos/:id', (req, res) => {
    const { id} = req.params;
    const todoIndex =  todos.findIndex(todo => todo.id === +(id))

    if (todoIndex === -1) {
        res.status(404).json({message: 'Todo not found'});
    } else {

        todos.splice(todoIndex, 1);
        res.status(200 ).json({message: 'Todo was deleted'});
    }
});

app.listen(PORT, () => {
  console.log('server started');
})
