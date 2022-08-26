import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import Products from './Products';

const NavBar = () => {

  const [search, setSearch] = useState(null)
  const [open, setIsOpen] = useState(false)
  const [productsList, setProductList] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const submitHandle = () => {
    axios.get(`http://localhost:3000/products?utf8=%E2%9C%93&name=${search}&commit=Search`)
    .then(response => setProductList(response.data))
    setIsOpen(true)
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Ecommerce App</Navbar.Brand>
            <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleChange}
                />
                <Button variant="outline-success" onClick={submitHandle}>Search</Button>
              </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>
      { open ? <Search open={open} search={search} productsList={productsList}/> : <Products/> }
    </>
  );
}

export default NavBar;
