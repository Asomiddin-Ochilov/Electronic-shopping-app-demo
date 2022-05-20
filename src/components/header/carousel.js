import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';
import img1 from './carouselImg/1.png';
import img2 from './carouselImg/2.png';
import img3 from './carouselImg/3.png';
function CarouselBlock() {
  return   <Carousel>
      <div className={'carousel-item'}>
          <img className={'carousel-img'} src={img3} alt={'img3'} />
      </div>
      <div className={'carousel-item'}>
          <img className={'carousel-img'} src={img2} alt={'img2'} />
      </div>
      <div className={'carousel-item'}>
          <img className={'carousel-img'} src={img3} alt={'img3'} />
      </div>
  </Carousel>
}

export default CarouselBlock