import { useEffect } from "react"
import ProductForm from "../ProductForm/ProductForm"
import { Button } from "react-bootstrap"
import {deleteApi } from '../../Shared/getData'
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../store/slices/commentsSlice';

const ProductShow = (props) => {

  const {checkProduct, productId} = props
  const dispatch = useDispatch();
  const {data: comments} = useSelector((state) => state.comment)

  useEffect(() => {
    dispatch(fetchComments(productId));
  }, [])

  const deleteProduct = () => { deleteApi(productId) }

  return(
    <div className='card'>
        <h1 className='heading'>Category Show Page</h1>
        <a href="/products" className='back btn btn-warning'>Back to Products</a>
        <div>
          <div key={checkProduct.id} className='cardbox'>
            {checkProduct.images.map(image => {
              return (
                <div className='images'>
                  <img src={image} alt='product'className='img'/>
                </div>
                )
            })}
          </div>
          <div className='content'>
            <h5>Listing name: <span>{checkProduct.name}</span></h5>
            <h5><span>{checkProduct.description}</span></h5>
            <h5>Serial # <span>{checkProduct.serial_no}</span></h5>
            <h5>price: <span>{checkProduct.price} $</span></h5>
          </div>
          <div className='section'>
            {<div className='reviewBox'>
                <span className="btn btn-success sec">Customer's Review Section</span>
                  { comments.map(comment => {
                  return <li key={comment.id} className="comments">{comment.body}</li>
                })}
              </div>}
          </div>
        </div>
        <div className='links'>
          <Button onClick={deleteProduct} href='/' className='btn btn-dark'>DELETE</Button>
          <ProductForm productId={productId} />
        </div>
      </div>
  )
}

export default ProductShow
