import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './OurWorks.css';
import carousel1 from '../../Images/carousel-1.png';
import carousel2 from '../../Images/carousel-2.png';
import carousel3 from '../../Images/carousel-3.png';
import carousel4 from '../../Images/carousel-4.png';
import carousel5 from '../../Images/carousel-5.png';


const OurWorks = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: "linear"
      };
    return (
        <div className = "container">
             <div className="serviceTitle text-center pb-5">
                    <h2>Provide awesome <span className="sarviceMarked">services</span></h2>
                </div>
        <div className="ourWorks">
        <Slider {...settings}>

          <div className = "sliderComponant">
            <img src={carousel1} alt="" className="img-fluid"/>
          </div>
          <div className = "sliderComponant">
          <img src={carousel2} alt="" className="img-fluid"/>
          </div>
          <div className = "sliderComponant">
          <img src={carousel3} alt="" className="img-fluid"/>
          </div>
          <div className = "sliderComponant">
          <img src={carousel4} alt="" className="img-fluid"/>
          </div>
          <div className = "sliderComponant">
          <img src={carousel5} alt="" className="img-fluid"/>
          </div>
        
        </Slider>
        </div>
    
        </div>
    );
};

export default OurWorks;