import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from '../ServiceItems/ServiceItems';
import './Service.css';

const Service = () => {
    return (
        <div id="sarvice" className = "container">
            <div className="service text-center">
                <div className="serviceTitle pb-5">
                    <h2>Provide awesome <span className="sarviceMarked">services</span></h2>
                </div>
               
                <div className="sarviceList row">
                <ServiceItems></ServiceItems>
                <ServiceItems></ServiceItems>
                <ServiceItems></ServiceItems>
                <ServiceItems></ServiceItems>
                </div>
               
            </div>
        </div>
    );
};

export default Service;