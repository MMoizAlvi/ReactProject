import React, { useEffect } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage'
import './ProductCard.css'
import ProductShow from '../ProductShow/ProductShow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productsSlice';

const ProductCard = ({match}) => {

  const dispatch = useDispatch();
  const {data: productsList} = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  const productId = parseInt(match.params.id)
  const checkProduct = productsList.filter(product => product.id === productId)[0]

 return(
  <>
    { checkProduct ? <ProductShow checkProduct={checkProduct} productId={productId}/> : <ErrorPage /> }
  </>
 );
}

export default ProductCard
