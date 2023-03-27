import React from 'react'

const Post = ({post}) => {
  return (
    <div>
        <h1>Post Details</h1>
        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            
        </div>
    </div>
  )
}

export default Post


export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const paths = posts.map(post => {
    return {
        params: {postId: `${post.id}`}
    }
  })

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps (context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();
    return {
        props: {
            post: data
        }
    }
}