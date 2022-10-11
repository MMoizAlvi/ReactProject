import { setSearch } from '../../store/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { fetchSearchProducts } from '../../store/slices/searchProductSlice';
import { handleOpen } from '../../store/slices/formSlice';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Search from '../Search/Search';
import Products from '../Products/Products';
import image from '../Images/search.png';
import './Navbar.css';

const NavBar = () => {

  const dispatch = useDispatch();

  const {data: productsList} = useSelector((state) => state.searchProduct)
  const open = useSelector((state) => state.form)
  const search = useSelector((state) => state.search)

  const handleChange = (e) => {dispatch(setSearch(e.target.value))};
  const submitHandle = () => {
    dispatch(fetchSearchProducts(search))
    dispatch(handleOpen(true));
  }

  return (
    <>
      <Navbar className='navbar'>
        <Container fluid>
          <Navbar.Brand href="/" className='name'>Ecommerce App</Navbar.Brand>
            <Form className="d-flex box">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleChange}
                />
                <Button variant="outline-success" onClick={submitHandle} className='searchBtn'>
                  <img src={image} alt="search" className='search'/></Button>
              </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>
      { open ? <Search open={open} search={search} productsList={productsList}/> : <Products/> }
    </>
  );
}

export default NavBar;
