import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import ProductForm from './ProductForm';
import './ProductCard.css'

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
  <div className='card'>
    <h1 className='heading'>Product Show Page</h1>
    <a href="/products" className='back btn btn-warning'>Back to Products</a>
    {
      productsList.filter(product => product.id === productId).map(filteredProduct => {
        return(
          <>
          <div key={filteredProduct.id} className='cardbox'>
            {filteredProduct.images.map(image => {
              return (
                <div className='images'>
                  <img src={image} alt='product image"'className='img'/>
                </div>
                )
            })}
          </div>
          <div className='content'>
            <h5>Listing name: <span>{filteredProduct.name}</span></h5>
            <h5>Serial # <span>{filteredProduct.serial_no}</span></h5>
            <h5>description: <span>{filteredProduct.description}</span></h5>
            <h5>price: <span>{filteredProduct.price} $</span></h5>
          </div>
          <div className='section'>
            {<div className='reviewBox'>
                <span className="btn btn-success sec">Customer's Review Section</span>
                  { filteredProduct.comments.map(comment => {
                  return <li key={comment.id} className="comments">{comment.body}</li>
                })}
              </div>}
          </div>
          </>
        )
      })
    }
    <div className='links'>
      <Button onClick={deleteProduct} href='/' className='btn btn-dark'>DELETE</Button>
      <ProductForm productId={productId} />
    </div>
  </div>
 );
}

export default ProductCard
