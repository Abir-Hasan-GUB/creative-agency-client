import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from '../ServiceItems/ServiceItems';
import './Service.css';

const Service = () => {

    const[course, setCourse] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-spire-02035.herokuapp.com/showCourse')
        .then(response => response.json())
        .then(data => setCourse(data))
    },[])


    return (
        <div id="sarvice" className = "container">
            <div className="service text-center">
                <div className="serviceTitle pb-5">
                    <h2>Provide awesome <span className="sarviceMarked">services</span></h2>
                </div>
               
                <div className="sarviceList row">
                   {
                        course.map(courses => <ServiceItems name = {courses.name} designation = {courses.designation}></ServiceItems>)
                    }
                </div>
               
            </div>
        </div>
    );
};

export default Service;