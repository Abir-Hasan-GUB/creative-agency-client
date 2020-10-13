import React from 'react';
import './Banner.css';
import bannerImg from '../../Images/logos/Frame.png';
import NavBar from '../NavBar/NavBar';

const Banner = () => {
    return (
        <div className="container banner">
            <div className="bannerImg row">
            <NavBar></NavBar>
                <div className="col-md-5 d-flex align-items-center">
                   <div className="bannerText pl-5">
                   <h1 className="bannerTitle mb-5">
                    Let’s Grow Your Brand To The Next Level
                    </h1>
                        <p className="bannerDescription mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button className="btn btn-dark bannerBtn">Hire Us</button>
                   </div>
                </div>
                <div className="col-md-7 bannerImg">
                    <img src={bannerImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;