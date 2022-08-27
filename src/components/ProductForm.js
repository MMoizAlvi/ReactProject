import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './ProductForm.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

const ProductForm = (props) => {

  const { productId } = props
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: ''
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({
      ...product,
      [e.target.name]: value
    });
  }

  const handleSubmit = () => {
   axios.put(`http://localhost:3000/products/${productId}`, {product: product})
    .then((response) => console.log(response.data))
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><span className="btn btn-dark">Edit</span></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalBox">
          <div>
            <form>
              <h3>Update Product!</h3>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Product Name"
                className='field'
                />
              <input
                type="text"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Product Price"
                className='field'
                />
              <input
                type="text"
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Product Description"
                className='field'
                />
              <button onClick={handleSubmit} className="btn btn-primary btn-sm">Submit</button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductForm;
