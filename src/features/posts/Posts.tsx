import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlics';

const Posts = () => {
    const posts = useSelector(selectAllPosts)

    return (
        <section>
            <h2>Post List</h2>
            {
                posts.map((post: {id: string, title: string, content: string}) =>
                    <article key={post.id} style={{border: '1px solid', margin: '5px'}}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </article>
                )
            }
        </section>
    )
}

export default Posts