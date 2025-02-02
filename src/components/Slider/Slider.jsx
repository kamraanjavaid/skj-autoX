import React from "react";
import AliceCarousel from "react-alice-carousel"; 
import "react-alice-carousel/lib/alice-carousel.css"; 
import carCollection from "./sliderCollection";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-container">
    <AliceCarousel autoPlay autoPlayInterval={3000} infinite disableButtonsControls>
      {carCollection.map((car, index) => (
        <div className="slider-img">
        <img key={index} src={car.imgPath} alt={`Car ${index + 1}`} className="carousel-img" />
        </div>
      ))}
    </AliceCarousel>
    </div>
  );
};

export default Slider;
