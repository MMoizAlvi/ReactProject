import '../Products/Products.css'
import Banner from '../Images/banner.jpg';
import ProductDetails from '../ProductDetails/ProductDetails';

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
                <ProductDetails product={product}/>
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
