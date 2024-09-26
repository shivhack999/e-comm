import React, { useRef } from 'react';
import Slider from '../../components/slider/Slider';
import Card from '../../components/card/card';
import AdvertisementCard from '../../components/common/AdvertisementCard/index';
import SmallCard from '../../components/common/SmallCards/index';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import TShirt_3 from '../../assets/collection_Puma_tShirts.jpeg';
import TShirt_1 from '../../assets/collection_random_tshirts.jpg';
import TShirt_2 from '../../assets/collection_random_tshirts_2.jpg';
import './homeStyle.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 300,
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 300,
        behavior: 'smooth', // Add smooth scrolling behavior
      });
    }
  };

  const advertisementCardInfo = [
    { title: 'Shoes', backgroundImage: TShirt_3, slogan: 'Affordable Prices' },
    { title: 'T-Shirts', backgroundImage: TShirt_1, slogan: 'Affordable Prices' },
    { title: 'T-Shirts', backgroundImage: TShirt_2, slogan: 'Affordable Prices' },
  ]

  const Style = {
    advertisementCards: {
      marginTop: '1rem',
    },
    showSmallCards: {
      marginTop: '1rem',
      width: '100%',
    }
  }

  return (
    <>
      <Slider />
      <div className="container-fluid p-3">
        <div className="d-flex flex-row productHeading pt-3">
          <h2 className="flex-grow-1 ps-2">Top View</h2>
          <Link to="/view-list">
            <button className="btn btn-dark rounded-0">View All</button>
          </Link>
        </div>
        <div className="d-flex flex-row productBox" ref={scrollRef}>
          {/* Button to scroll left */}
          <button onClick={scrollLeft} className="topViewProductScrollLeftBtn">
            <FaCaretLeft />
          </button>
          {/* card store in components->card folder */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* Button to scroll right */}
          <button onClick={scrollRight} className="topViewProductScrollRightBtn me-3">
            <FaCaretRight />
          </button>
        </div>
        <section style={Style.advertisementCards}>
          <AdvertisementCard imageDescription={advertisementCardInfo} />
        </section>

        <section style={Style.showSmallCards}>
          <SmallCard />
        </section>
      </div>
    </>
  )
}

export default Home