import React from 'react'

const ProductDetails = ({product}) => {
  return (
    <div>
   <h1>Product Details</h1>
    <h1>{product.id}</h1>
    <p>{product.price}</p>
    <p>{product.name}</p>
    </div>
  )
}

export async function getStaticPaths() {
    const response = await fetch(`http://localhost:4000/products`);
    const data = await response.json();
    const paths = data.map(prod => {
        return {
            params: { productId: `${prod.id}`}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps (context) {
    console.log("Regenerating....dynamic")
    const { params } = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await response.json();

    return {
        props: {
            product: data
        },
        revalidate: 10
    }
}



export default ProductDetails