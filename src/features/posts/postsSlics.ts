import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_POSTS = 'https://jsonplaceholder.typicode.com/posts'; //'http://localhost:3000/posts';

const initialState = {
    posts: [],
    status: 'idle', // idle/loading/succeeded/failed
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const res = await axios(GET_POSTS);
        return [...res.data]
    } catch(err) {
        console.log(err);
        return err.message;
    }
})

export const addNewPost = createAsyncThunk('posts/addPost', async (postData) => {
    try {
        const res = await axios.post(GET_POSTS, postData)
        return res.data;
    } catch (err) {
        console.log(err);
        return err.message;
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state: any, action: any) {
                state.posts.push(action.payload);
            },
            prepare(title: string, content: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            // Fetch post
            .addCase(fetchPosts.pending, (state) => {
                console.log('loading');
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action: {payload: any}) => {
                console.log('succeeded');
                state.status = 'succeeded'
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action: any) => {
                console.log('failed');
                state.status = 'failed'
                state.error = action.error.message
            })
            // Add Post
            .addCase(addNewPost.pending, (state) => {
                console.log('loading');
                state.status = 'loading'
            })
            .addCase(addNewPost.fulfilled, (state, action: { payload: any }) => {
                state.status = 'succeeded'
                state.posts.push(action.payload)
            })
            .addCase(addNewPost.rejected, (state, action: any) => {
                console.log('failed');
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// If change data structure in future.
export const selectAllPosts = (state: any) => state.posts.posts;
export const getPostsStatus = (state: any) => state.posts.status;
export const getPostsError = (state: any) => state.posts.error;

export const { addPost } = postSlice.actions;
export default postSlice.reducer;