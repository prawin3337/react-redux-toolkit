import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlics';
import { nanoid } from '@reduxjs/toolkit';

export const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch()

    const onAddPost = (e: any) => {
        e.preventDefault();
        if(title && content) {
            // const newPost = addPost({ id: nanoid(), title, content });
            // dispatch(newPost);
            // OR using toolkit prepared callback
            dispatch(addPost(title, content));

            // reset input
            setTitle('');
            setContent('');
        }
    }
    
    
    return (
        <section>
            <form>
                <label>Title:</label>
                <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} />&nbsp;
                <label>Content:</label>
                <input type='text' value={content} onChange={(e) => { setContent(e.target.value) }} />&nbsp;
                <input type='submit' value="Add Post" onClick={(e) => { onAddPost(e)}}/>
            </form>
        </section>
    )
}
