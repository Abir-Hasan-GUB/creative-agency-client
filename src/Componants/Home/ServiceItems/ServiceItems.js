import React from 'react';
import './ServiceItems.css';
import service1 from '../../Images/icons/service1.png';
import service2 from '../../Images/icons/service2.png';
import service3 from '../../Images/icons/service3.png';
import { Link } from 'react-router-dom';

const ServiceItems = (props) => {
  return (
    <div id="linkCard" class="linkCard card-deck sarviceItems col-md-4 col-lg-4 col-sm-6 mt-3">
   
   <Link to='/admin'>
   <div class="card">
     <img className="card-img-top mt-3 mb-3" src={`data:image/jpeg;base64,${props.img.img}`} alt="" />
     <div class="card-body">
       <h5 class="card-title">{props.name}</h5>
       <p class="card-text">{props.designation}</p>
     </div>
   </div>
   </Link>
 </div>
 
  );
};

export default ServiceItems;