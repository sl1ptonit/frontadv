import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: "column", gap: '10px' }}>
                {this.props.todos.map(todo => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={this.props.deleteTodo}
                        toggleTodo={this.props.toggleTodo}
                    />
                })}

                {this.props.todos.length === 0 ? <p>Todo list is empty</p> : "" }

            </div>
        )
    }
}

export default TodoList;