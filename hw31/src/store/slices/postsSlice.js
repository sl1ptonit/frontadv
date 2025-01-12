import { createSlice} from "@reduxjs/toolkit";
import {fetchPosts, addPost, updatePost, deletePost} from "../thunks/postsThunk";

const initialState = {
    posts: [],
    loading: false,
    error: '',
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch post
            .addCase(fetchPosts.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })//Add post
            .addCase(addPost.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.posts.push(action.payload);
            })
            .addCase(addPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }) //Update post
            .addCase(updatePost.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';

                const index = state.posts.findIndex(post => post.id === action.payload.id)

                if (index !== -1) {
                    state.posts[index] = action.payload;
                }
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })// Delete post
            .addCase(deletePost.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';

                state.posts = state.posts.filter(post => post.id !== action.payload);
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default postsSlice.reducer;