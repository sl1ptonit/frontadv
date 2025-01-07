import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts= createAsyncThunk('posts/fetchPosts', async(_, {rejectWithValue}) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

export const addPost = createAsyncThunk('posts/addPost', async(newPost, {rejectWithValue}) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw new Error('Failed to add posts');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

export const updatePost = createAsyncThunk('posts/updatePost', async(updatedPost, {rejectWithValue}) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedPost)
        });

        if (!response.ok) {
            throw new Error('Failed to update post');
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async(postId, {rejectWithValue}) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to update post');
        }

        return postId;
    } catch (e) {
        return rejectWithValue(e.message);
    }
})