import React, {Component, useState} from 'react';
import { useSelector, useDispatch} from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList"

export default function TodoPage() {
    const todos = useSelector( (state) => state.todos.todos);
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Todo Page</h1>
            <TodoForm />
            <TodoList
                todos={todos}
            />
        </div>
    )
}