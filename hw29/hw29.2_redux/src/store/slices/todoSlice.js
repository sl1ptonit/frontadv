import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodoToStore: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                return todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            })
        }
    }
})

export const {
    addTodoToStore,
    deleteTodo,
    toggleTodo} = todosSlice.actions;
export default todosSlice.reducer;