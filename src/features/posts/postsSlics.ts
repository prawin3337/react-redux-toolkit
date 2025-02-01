import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learn Redux', content: 'Good things' },
    { id: '2', title: 'Slices ', content: 'more slice' }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
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
    }
})

// If change data structure in future.
export const selectAllPosts = (state: any) => state.posts; 
export const { addPost } = postSlice.actions;
export default postSlice.reducer;