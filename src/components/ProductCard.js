import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import ProductForm from './ProductForm'

const ProductCard = ({match}) => {
  
  const [productsList, setProductList] = useState([])
  const productsUrl = "http://localhost:3000/"
  const productId = parseInt(match.params.id)

  const fetchProductsList = () => {
    axios.get(productsUrl)
    .then((response) => setProductList(response.data))
  }

  useEffect(() => {
    fetchProductsList()
  }, [])

  const deleteProduct = () => {
    axios.delete(`http://localhost:3000/products/${match.params.id}`)
    .then((response) => console.log(response.data))
  }

 return(
  <div>
    {
      productsList.filter(product => product.id === productId).map(filteredProduct => {
        return(
          <div key={filteredProduct.id}>
            {filteredProduct.images.map(image => {
              return <img src={image} alt="product image"/>
            })}
            <h1>Listing name: {filteredProduct.name}</h1>
            <h2>Serial#: {filteredProduct.serial_no}</h2>
            <h2>description: {filteredProduct.description}</h2>
            <h3>price: {filteredProduct.price}$</h3>
            {<div>
              Reviews: {filteredProduct.comments.map(comment => {
                return <p key={comment.id}>{comment.body}</p>
              })}
            </div>}
          </div>
        )
      })
    }
    <a href="/products">Back to Products</a>
    <Button onClick={deleteProduct} href="/">Delete</Button>
    <ProductForm productId={productId}/>
  </div>
 );
}

export default ProductCard
