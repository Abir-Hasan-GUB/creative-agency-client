import React from 'react';
import ServiceItems from '../ServiceItems/ServiceItems';
import './Service.css';

const Service = () => {
    return (
        <div id="sarvice" className = "container">
            <div className="service text-center">
                <div className="serviceTitle pb-5">
                    <h2>Provide awesome <span className="sarviceMarked">services</span></h2>
                </div>
                <div className="sarviceList">
                <ServiceItems></ServiceItems>
                </div>
            </div>
        </div>
    );
};

export default Service;