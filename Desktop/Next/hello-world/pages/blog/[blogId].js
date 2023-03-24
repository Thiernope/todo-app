import React from 'react'
import { useRouter } from "next/router";

const BlogDetails = () => {
 const router = useRouter();
 const id = router.query.blogId;
  return (
    <div>BlogDetails .... {id}</div>
  )
}

export default BlogDetails