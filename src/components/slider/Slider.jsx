import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/foot.png';
import image2 from '../../assets/images2.png';
import image3 from '../../assets/images.jpg';
import './sliderStyle.css';
const Slider = () => {
  return (
    <>
        <Carousel  fade>
        <Carousel.Item>
            <a href="/a"><img src={image1} alt="" className='slider-img'/></a>
        </Carousel.Item>
        <Carousel.Item>
            <a href="/a"><img src={image2} alt="" className='slider-img'/></a>
        </Carousel.Item>
        <Carousel.Item>
            <a href="/a"><img src={image3} alt="" className='slider-img'/></a>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider