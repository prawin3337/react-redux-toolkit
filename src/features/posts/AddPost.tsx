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
            dispatch(addPost({ id: nanoid(), title, content }));
            setTitle('');
            setContent('');
        }
    }
    
    
    return (
        <section>
            <form>
                <label>Title:</label>
                <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }}/>&nbsp;
                <label>Content:</label>
                <input type='text' value={content} onChange={(e) => { setContent(e.target.value) }} />
                <input type='submit' value="Add Post" onClick={(e) => { onAddPost(e)}}/>
            </form>
        </section>
    )
}
