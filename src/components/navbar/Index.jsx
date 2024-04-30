import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import logo from '../../assets/logo.png';
import { useState } from 'react';
import './index.css';


const Index = () => {
  const [btnHoverd , setBtnHoverd] = useState(false);
  const style ={
    searchBtn:{
      backgroundColor:btnHoverd?'transparent':'#FF693A',
      borderColor:btnHoverd?'white':'transparent',
  }
  }
  return (
    <Navbar expand="lg" className='navbarBg'>
      <Container fluid >
        <Navbar.Brand href="#" className='text-white'><img src={logo} alt="One Price" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex me-auto ms-auto">
            <input
              type="search"
              placeholder="Search Items"
              aria-label="Search"
              className="rounded-0 searchBox"
            />
            <Button className='rounded-0 searchBtn' style={style.searchBtn} onMouseEnter={() =>setBtnHoverd(true)} onMouseLeave={() =>setBtnHoverd(false)}>Search</Button>
          </Form>
          <Nav
            className=" my-lg-0 ml-auto"
            style={{ maxHeight: 'auto',textAlign:'center' }}
            navbarScroll
          >
            <Nav.Link href="/user" className="text-white fw-medium">User</Nav.Link>
            <Nav.Link href="#action2" className="text-white fw-medium"> <FaCartShopping style={{"fontSize":"20px"}} className='me-2' />Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;