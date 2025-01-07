import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import todoReducer from "./slices/todoSlice"
import postsReducer from "./slices/postsSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        posts: postsReducer,
    }
})