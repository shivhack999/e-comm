import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import { GrHelpBook } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { TfiPackage } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import logo from '../../assets/logo.png';
import './index.css';


const Index = () => {
  const [btnHoverd , setBtnHoverd] = useState(false);
  const [hoverOnProfile, setHoverOnProfile] = useState(false);
  const profileCardRef = useRef(null);
  const style = {
    searchBtn:{
      backgroundColor:btnHoverd?'transparent':'#FF693A',
      borderColor:btnHoverd?'white':'transparent',
    },
    profileMenuBtn:{
      borderWidth: '1.5px',
      borderStyle: 'solid',
      borderRadius: '5px',
      borderColor: hoverOnProfile?'rgba(170, 170, 170)':'#484F57',
      cursor: 'text'
    }
  }

  const handleMenuOnClick = () => {
    if(profileCardRef.current){
      profileCardRef.current.style.display = 'none';
    }
  }

  return (
    <Navbar expand="lg" className='navbarBg fixed-top'>
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
            style={{ maxHeight: 'auto', textAlign:'center' }}
            navbarScroll
          >
            <div className='one-price-menu-container'>
              <Nav.Link className="d-flex me-auto ms-auto text-white one-price-menu-btn" style={style.profileMenuBtn} onMouseOver={() => setHoverOnProfile(true)} onMouseOut={() => setHoverOnProfile(false)}><CgProfile style={{"fontSize":"25px"}} className='me-2' />One Price</Nav.Link>
              <div className={`prof-menu-container menu-container ${hoverOnProfile ? 'one-price-menu-effect' : ''}`} style={{display: hoverOnProfile? 'flex' : 'none'}}  onMouseOver={() => setHoverOnProfile(true)} onMouseOut={() => setHoverOnProfile(false)} onClick={handleMenuOnClick} ref={profileCardRef}>
                <Link to='/user' className='access-btn'>
                  {/* <div className='greeting'>Welcome</div>
                  <div className="sign-log-btn">
                    LOGIN/SIGNUP
                  </div> */}
                  <div className='content' style={{marginRight: '1.8rem'}}>
                    New Customer ?
                  </div>
                  <div className='sign-btn'>
                    Sign Up
                  </div>
                </Link>
                <Link to='/my-profile' className='prof-container each-menu-card' title='My Profile'>
                  <CgProfile/>
                  <div className='my-prof-btn'>My Profile</div>
                </Link>
                <Link className='order-container each-menu-card' title='orders'>
                  <TfiPackage />
                  <div className='my-order-btn'>Orders</div>
                </Link>
                <Link className='whis-container each-menu-card' title='Whishlist'>
                  <CiHeart />
                  <div className='whis-btn'>Wishlist</div>
                </Link>
                <Link className='notifi-container each-menu-card' title='Notification'>
                  <IoIosNotificationsOutline />
                  <div className='notifi-btn'>Notification</div>
                </Link>
                <Link className='log-container each-menu-card' title='logout'>
                  <IoIosLogOut />
                  <div className='log-btn'>Logout</div>
                </Link>
              </div>
            </div>
            <Nav.Link href="/user" className="text-white fw-medium" style={{border: '1.5px solid #484F57'}}> <GrHelpBook  style={{"fontSize":"20px"}} className='me-2' />Help</Nav.Link>
            <Nav.Link href="#action2" className="text-white fw-medium" style={{border: '1.5px solid #484F57'}}> <FaCartShopping style={{"fontSize":"20px"}} className='me-2' />Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;