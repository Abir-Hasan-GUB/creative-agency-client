import React from 'react';
import './ServiceItems.css';
import service1 from '../../Images/icons/service1.png';
import service2 from '../../Images/icons/service2.png';
import service3 from '../../Images/icons/service3.png';

const ServiceItems = (props) => {
  console.log(props)
    return (
        <div class="card-deck sarviceItems col-md-4 col-lg-4 col-sm-6 mt-3">
  <div class="card">  

    {/* <img className="card-img-top mt-3 mb-3" src={`data:image/jpeg;base64,${props.image.img}`} alt=""/> */}
    
    <div class="card-body">
      <h5 class="card-title">{props.name}</h5>
      <p class="card-text">{props.designation}</p>
    </div>
    
  </div>
  {/* <div class="card">
    <img className="card-img-top mt-3 mb-3" src={service2} alt="service2"/>
    <div class="card-body">
      <h5 class="card-title">Graphic design</h5>
      <p class="card-text">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
    </div>
    
  </div>
  <div class="card">
    <img className="card-img-top mt-3 mb-3" src={service3} alt="service3"/>
    <div class="card-body">
      <h5 class="card-title">Web development</h5>
      <p class="card-text">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
    </div>
    
  </div> */}
</div>
    );
};

export default ServiceItems;