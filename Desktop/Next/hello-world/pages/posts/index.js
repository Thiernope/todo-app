import React from 'react'
import Link from 'next/link';

const Posts = ({posts}) => {
  return (
    <div>
        <h1>POST</h1>
        {posts.map(post => (
            <Link href={`/posts/${post.id}`}>
            <div style={{backgroundColor: "gray", padding: "10px", marginBottom: "20px"}} key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default Posts


export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =  await response.json();
    return {
        props: {
            posts: data
        }
    }
}