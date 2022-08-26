const Search = (props) => {
  const {open, productsList } = props
  if (open) {
    return (
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
}

export default Search;
