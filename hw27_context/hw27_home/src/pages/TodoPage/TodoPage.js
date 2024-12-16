import React, {Component} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList"

class TodoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }
    addTodo = (task) => {
        const newTodo = {
            task,
            completed: false,
            id: this.state.todos.length + 1,
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                return todo.id === id ? {...todo, completed: !todo.completed} : todo
            })
        })
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1>Todo Page</h1>
                <TodoForm addTodo={this.addTodo} />
                <TodoList
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                    toggleTodo={this.toggleTodo}
                />

            </div>
        )
    }
}

export default TodoPage;