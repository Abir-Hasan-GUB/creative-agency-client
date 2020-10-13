import React from 'react';
import './BrandLogo.css';
import google from '../../Images/logos/google.png';
import uber from '../../Images/logos/uber.png';
import netflix from '../../Images/logos/netflix.png';
import airbnb from '../../Images/logos/airbnb.png';
import slack from '../../Images/logos/slack.png';

const BrandLogo = () => {
    return (
        <div className = 'container'>
           <div className="brandLogo d-flex justify-content-between align-items-center">
               <img src = {slack} alt="" className="img-fluid"/>
               <img src = {google} alt="" className="img-fluid"/>
               <img src = {uber} alt="" className="img-fluid"/>
               <img src = {netflix} alt="" className="img-fluid"/>
               <img src = {airbnb} alt="" className="img-fluid"/>
           </div>
        </div>
    );
};

export default BrandLogo;