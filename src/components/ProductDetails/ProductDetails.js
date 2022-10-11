const ProductDetails = (props) => {
  const {product} = props

  return(
          <div key={product.id} className='productCardbox'>
            <a href={`/product/${product.id}`}>
              <img src={`${product.images[0]}`} alt="product" className='landingImg'/>
              </a>
            <div className='area'>
              <h5 className='list'><a href={`/product/${product.id}`} className='index'>{product.name}</a></h5>
              <h5 className='list'>{product.description}</h5>
              <h5 className='list'>Serial # {product.serial_no}</h5>
              <h5 className='list'>price: {product.price}$</h5>
            </div>
            <div>
              <a href={`/product/${product.id}`} className="btn btn-warning view">View {product.name}</a>
            </div>
          </div>
          )
}

export default ProductDetails
