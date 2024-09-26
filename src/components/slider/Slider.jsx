import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/image_1_copy.png';
import image3 from '../../assets/image_3.jpeg';
import image4 from '../../assets/image_4.jpeg';
import image5 from '../../assets/image_5.png';
import image6 from '../../assets/image_6.png';
import './sliderStyle.css';
const Slider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className='slider-image-container'>
          <a href="/a"><img src={image5} alt="" className='slider-img' /></a>
        </Carousel.Item>
        <Carousel.Item className='slider-image-container'>
          <a href="/a"><img src={image6} alt="" className='slider-img' /></a>
        </Carousel.Item>
        <Carousel.Item className='slider-image-container'>
          <a href="/a"><img src={image1} alt="" className='slider-img' /></a>
        </Carousel.Item>
        <Carousel.Item className='slider-image-container'>
          <a href="/a"><img src={image3} alt="" className='slider-img' /></a>
        </Carousel.Item>
        <Carousel.Item className='slider-image-container'>
          <a href="/a"><img src={image4} alt="" className='slider-img' /></a>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider