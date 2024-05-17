import React, { useRef } from 'react';
import Slider from '../../components/slider/Slider';
import Card from '../../containers/CartContainer';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import './homeStyle.css';
import { Link } from 'react-router-dom';
const Home= () => {
    const scrollRef = useRef(null);
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollLeft - 100,
          behavior: 'smooth', // Add smooth scrolling behavior
        });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollLeft + 100,
          behavior: 'smooth', // Add smooth scrolling behavior
        });
      }
    };
  
  return (
    <>
        <Slider/>
        <div className="container-fluid p-3">
        <div className="d-flex flex-row productHeading pt-3">
          <h2 className="flex-grow-1 ps-2">Top View</h2>
          <Link to="a">
            <button className="btn btn-dark rounded-0">View All</button>
          </Link>
        </div>
        <div className="d-flex flex-row productBox" ref={scrollRef}>
          {/* Button to scroll left */}
          <button onClick={scrollLeft} className="topViewProductScrollLeftBtn">
            <FaCaretLeft />
          </button>
          {/* card store in components->card folder */}
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          {/* Button to scroll right */}
          <button onClick={scrollRight} className="topViewProductScrollRightBtn me-3">
            <FaCaretRight />
          </button>
        </div>
        </div>
        
    </>
  )
}

export default Home