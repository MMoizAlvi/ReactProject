import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
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
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <form>
              <label>Name:
                <input type="text" name="name" value={product.name} onChange={handleChange} />
              </label>
              <label>Price:
                <input type="text" name="price" value={product.price} onChange={handleChange}/>
              </label>
              <label>Description:
                <input type="text" name="description" value={product.description} onChange={handleChange}/>
              </label>
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductForm;
