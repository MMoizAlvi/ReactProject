import * as React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import './ProductForm.css';
import { handleClose, handleOpen } from '../../store/slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';

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
  
  const dispatch = useDispatch();
  const open = useSelector((state) => state.form)
  const formOpen = () => {dispatch(handleOpen(true))};
  const formClose = () => {dispatch(handleClose(false))};

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("*Required"),
      price: Yup.string()
      .max(10, "Must be 1000000 or less")
      .required("*Required"),
      description: Yup.string()
      .max(40, "Must be 40 characters or less")
      .required("*Required")
    }),
    onSubmit: (values) => {
      axios.put(`http://localhost:3000/products/${productId}`, {product: values})
      .then((response) => console.log(response.data))
    }
  })

  return (
    <div>
      <Button onClick={formOpen}><span className="btn btn-dark">Edit</span></Button>
      <Modal
        open={open}
        onClose={formClose}
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
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Product Name"
                className='field'
                />
                {formik.touched.name && formik.errors.name ?
                  <p className='validation'>{formik.errors.name}</p>
                  : null}
              <input
                type="text"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Product Price"
                className='field'
                />
                {formik.touched.price && formik.errors.price ?
                  <p className='validation'>{formik.errors.price}</p>
                  : null}
              <input
                type="text"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Product Description"
                className='field'
                />
                {formik.touched.description && formik.errors.description ?
                  <p className='validation'>{formik.errors.description}</p>
                  : null}
              <button onSubmit={formik.handleSubmit} className="btn btn-primary btn-sm">Update</button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductForm;
