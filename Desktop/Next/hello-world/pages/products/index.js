import React from 'react'
import Link from 'next/link'

const ProductList = ({products}) => {
    console.log("TTTT", products)
  return (
    <div>
     <h1>Product List</h1>
     {products.map(prod => (
        <div key={prod.id}>
            <Link href={`/products/${prod.id}`}>
            <h1>{prod.id}</h1>
            <h2>{prod.name}</h2>
            <h2>{prod.price}</h2>
            </Link>
        </div>
     ))}
    </div>
  )
}


export async function getStaticProps () {
    console.log("Regenerating....")
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    return {
        props: {
            products: data
        },
        revalidate: 10
    }
}


export default ProductList