import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from '../ServiceItems/ServiceItems';
import './Service.css';

const Service = () => {

    const[course, setCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showCourse')
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
                        course.map(courses => <ServiceItems name = {courses.name} img = {courses.image} designation = {courses.designation}></ServiceItems>)
                    }
                </div>
               
            </div>
        </div>
    );
};

export default Service;