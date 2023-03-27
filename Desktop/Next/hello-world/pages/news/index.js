import React from 'react'
import Link
 from 'next/link';
const NewsList = ({articles}) => {
  return (
    <div>
       <h1>News</h1>
        <div style={{backgroundColor: "indigo"}}>
        { articles.map(article => (
         <Link key={article.id} href={`/news?category=${article.category}`}><p>{article.category}</p></Link>
        ))}
       </div> 
       { articles.map(article =>(
        <div key={article.id}>
        <Link href={`/news/${article.id}`}>
            <h1>{article.id}</h1>
            <h2>{article.category}</h2>
            <p>{article.body}</p>
        </Link>
        </div>
       ))}
    </div>
  )
}


export async function getServerSideProps() {
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json();

    return {
        props: {
            articles: data
        }
    }
}



export default NewsList