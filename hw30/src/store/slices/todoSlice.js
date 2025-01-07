import { createSlice} from "@reduxjs/toolkit";
import {fetchTodos, addTodo, deleteTodo, toggleTodo} from "../thunks/todoThunk";

const initialState = {
    todos: [],
    loading: false,
    error: '',
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodoSync: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodoSync: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodoSync: (state, action) => {
            state.todos = state.todos.map(todo => {
                return todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            })
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch todos
            .addCase(fetchTodos.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })//Add todo
            .addCase(addTodo.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.todos.push(action.payload);
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }) //Toggle todo
            .addCase(toggleTodo.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';

                const index = state.todos.findIndex(todo => todo.id === action.payload.id)

                if (index !== -1) {
                    state.todos[index] = action.payload;
                }
            })
            .addCase(toggleTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })// Delete todo
            .addCase(deleteTodo.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';

                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const {
    addTodoSync,
    deleteTodoSync,
    toggleTodoSync} = todosSlice.actions;
export default todosSlice.reducer;