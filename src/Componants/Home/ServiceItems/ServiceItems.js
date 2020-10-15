import React from 'react';
import './ServiceItems.css';
import { Link } from 'react-router-dom';
import course from '../../Images/course.jpg';

const ServiceItems = (props) => {
  return (
    <div id="linkCard" class="linkCard card-deck sarviceItems col-md-3 mt-3">
   
   <Link to='/admin'>
   <div class="card abirs">
   <img className="ims card-img-top mt-3 mb-3" src={course} alt="course" />
     {/* <img className="ims card-img-top mt-3 mb-3" src={`data:image/jpeg;base64,${props.img.img}`} alt="" /> */}
     <div class="card-body abirbox">
      <div className="content">
      <h5 class="card-title text-warning mt-5">{props.name}</h5>
       <p class="card-text">{props.designation}</p>
      </div>
     </div>
   </div>
   </Link>
 </div>
 
  );
};

export default ServiceItems;