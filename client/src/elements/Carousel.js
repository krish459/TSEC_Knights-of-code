import '../css/Carousel.css'

import { useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

import Slider from "react-slick";
import one from '../assets/car1.jpg'
import two from '../assets/car2.jpg'
import three from '../assets/car3.jpg'
import four from '../assets/car4.jpg'
import five from '../assets/car5.jpg'
import six from '../assets/car6.webp'

export default function Carousel(){

    const images = [one, two, three, four, five, six];
    const [imageIndex, setImageIndex] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FontAwesomeIcon icon = {faArrowLeft} />
          </div>
        );
      };
    
    
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 100,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };

    return(
        <Slider {...settings} className="main-slider">
            {images.map((img, idx) => (
            <div key = {idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
                <div className="carousel-content">
                  Content for cards Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam architecto dolore id nulla, natus, dignissimos dolorem dolorum labore odit distinctio delectus? Iure, earum cupiditate rerum esse magnam quod odio quidem.
                </div>
            </div>
            ))}
        </Slider>
    )
}