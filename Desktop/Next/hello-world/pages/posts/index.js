import React from 'react'
import Link from 'next/link';

const PostLists = ({posts}) => {
  return (
    <div>
        <h3>All Posts</h3>
        {posts.map(post => (
            <Link href={`posts/${post.id}`}>
            <p>{post.id}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>....................</p>
            </Link>
            
        ))}
    </div>
  )
}

export default PostLists



export async function getStaticProps () {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return {
        props: {
            posts: data
        }
    }
}