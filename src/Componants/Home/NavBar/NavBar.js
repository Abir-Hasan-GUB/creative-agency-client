import React from 'react';
import './NavBar.css';
import logo from '../../Images/logos/logo.png';

const NavBar = () => {
    return (
       <nav class="navbar navbar-expand-lg navbar-light container">
  <a class="navbar-brand" href="#">
      <img className="logo" src={logo} alt="logo"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto menuList">
      <li class="nav-item active">
        <a class="nav-link navHome" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#sarvice">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ourworks">Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Footer">Contact US</a>
      </li>
      <li class="nav-item">
        <button className="btn btn-dark">Login</button>
      </li>

    </ul>
  </div>
</nav>
    );
};

export default NavBar;