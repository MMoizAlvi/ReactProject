import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [productsList, setProductList] = useState([])
  const productsUrl = "http://localhost:3000/"
  const fetchProductsList = () => {
    axios.get(productsUrl)
    .then((response) => setProductList(response.data))
  }

  useEffect(() => {
    fetchProductsList()
  }, [])

 return(
  <div>
    {
      productsList.map(product => {
        return(
          <div key={product.id}>
            <img src={`${product.images[0]}`} alt="product image"/>
            <h1>Listing name: <a href={`/product/${product.id}`}>{product.name}</a></h1>
            <h2>Serial#: {product.serial_no}</h2>
            <h2>description: {product.description}</h2>
            <h3>price: {product.price}$</h3>
            {<div>
              Reviews: {product.comments.map(comment => {
                return <p key={comment.id}>{comment.body}</p>
              })}
            </div>}
          </div>
        )
      })
    }
  </div>
 );
}

export default Products
