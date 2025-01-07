import React, {Component, useEffect, useState} from 'react';
import { useSelector, useDispatch} from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList"
import {fetchTodos} from "../../store/thunks/todoThunk";

import "./todo.css";

export default function TodoPage() {

    const { todos, loading }  = useSelector( (state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div>
            {loading && <div className="loading">Loading...</div>}
            <h1>Todo Page</h1>
            <TodoForm />
            <TodoList
                todos={todos}
            />
        </div>
    )
}