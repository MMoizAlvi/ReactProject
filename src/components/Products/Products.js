import React, { useEffect } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import Banner from '../Images/banner.jpg';
import './Products.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productsSlice';
import { STATUSES } from '../../store/apiStatus';

const Products = () => {
  const dispatch = useDispatch();
  const {data: productsList, status} = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  if (status === STATUSES.LOADING){
    return(
      <h1 className='loading'>Loading...</h1>
    )
  }
  if (status === STATUSES.ERROR){
    return(
      <h1 className='error'>Something Went wrong!</h1>
    )
  }

 return(
  <div className='main'>
    <div className='banner'>
      <img src={Banner} alt="Cover Banner"/>
    </div>
    <div><h1 className='productHeading'>Products Section</h1></div>
    <div>
      {
        productsList && productsList.map(product => {
          return ( <ProductDetails product={product} /> )
        })
      }
    </div>
    <div><h1 className='productHeading'>Coming Soon!</h1></div>
  </div>
 );
}

export default Products
