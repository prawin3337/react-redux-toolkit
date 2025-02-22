import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import postsReducer from './features/posts/postsSlics';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer
    }
})