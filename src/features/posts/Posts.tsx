import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from './postsSlics';

const Posts = () => {
    const dispatch = useDispatch();

    const postStatus = useSelector(getPostsStatus);
    const postErros = useSelector(getPostsError);
    const posts = useSelector(selectAllPosts);
    
    useEffect(() => {
        if(postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch]);

    return (
        <section>
            <h2>Post List</h2>
            {
                postStatus === 'loading' ? <p>Loading...</p> :
                postStatus === 'succeeded' ?
                        posts.map((post: { id: string, title: string, body: string}) =>
                        <article key={post.id} style={{border: '1px solid', margin: '5px'}}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </article>
                    ) 
                : <p>{postErros}</p>
            }
        </section>
    )
}

export default Posts