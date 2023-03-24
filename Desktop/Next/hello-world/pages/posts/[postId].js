import React from 'react'

const Post = ({post}) => {
  return (
    <div>
        <h1>The Post</h1>
        <p>............</p>
        <h2>{post.id}</h2>
        <p3>{post.body}</p3>
    </div>
  )
}

export default Post;


export async function getStaticPaths() {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   const posts = await response.json();
   const paths = posts.map(post => {
    return {
        params: { postId: `${post.id}`}
    }
   })

   return {
    paths,
    fallback: false
   }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();

    return {
        props: {
           post: data 
        }
    }
}