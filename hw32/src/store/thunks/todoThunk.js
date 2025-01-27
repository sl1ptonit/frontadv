import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos= createAsyncThunk('todos/fetchTodos', async(_, {rejectWithValue}) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

export const addTodo = createAsyncThunk('todos/addTodo', async(newTodo, {rejectWithValue}) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo)
        });

        if (!response.ok) {
            throw new Error('Failed to add todos');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

export const toggleTodo = createAsyncThunk('todos/updateTodo', async(updatedTodo, {rejectWithValue}) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTodo)
        });

        if (!response.ok) {
            throw new Error('Failed to update Todo');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async(todoId, {rejectWithValue}) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to update Todo');
        }

        return todoId;
    } catch (e) {
        return rejectWithValue(e.message);
    }
})