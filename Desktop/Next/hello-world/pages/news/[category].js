import React from 'react'

const NewsCategory = ({articles, category}) => {
  return (
    <div>
        <h1>All Articles in {category} category</h1>
        {
            articles.map(article => (
                 <div>
                    <h1>{article.id}</h1>
                    <p>{article.body}</p>
                 </div>
            ))
        }
    </div>
  )
}



export async function getServerSideProps(context) {
    const { params } = context;
    const { category } = params;
    console.log("TKLS", category)
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();
    console.log("VVV", data)
    return {
        props: {
            articles: data,
            category
        }
    }
}


export default NewsCategory