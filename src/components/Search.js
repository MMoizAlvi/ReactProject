import './Products.css'
import Banner from './Images/banner.jpg';

const Search = (props) => {
  const {open, productsList } = props

  if (open) {
    return (
      <div className='main'>
        <div className='banner'>
          <img src={Banner} alt="Cover Banner"/>
        </div>
        <div><h1 className='productHeading'>Products Section</h1></div>
        <div>
          {
            productsList.map(product => {
              return(
                <div key={product.id} className='productCardbox'>
                  <a href={`/product/${product.id}`}>
                    <img src={`${product.images[0]}`} alt="product image" className='landingImg'/>
                   </a>
                  <div className='area'>
                    <h5 className='list'><a href={`/product/${product.id}`} className='index'>{product.name}</a></h5>
                    <h5 className='list'>Serial # {product.serial_no}</h5>
                    <h5 className='list'>description {product.description}</h5>
                    <h5 className='list'>price: {product.price}$</h5>
                  </div>
                  {<div className='review'>
                    <h5 className='reviewheading'> Product's Review </h5> {product.comments.map(comment => {
                      return <p key={comment.id}>{comment.body}</p>
                    })}
                  </div>}
                  <div>
                    <a href={`/product/${product.id}`} className="btn btn-warning view">View {product.name}</a>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div><h1 className='productHeading'>Coming Soon!</h1></div>
      </div>
    );
  }
}

export default Search;
