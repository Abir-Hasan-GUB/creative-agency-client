import React from 'react';
import './UserSettingMenu.css';
import logo from '../../Images/logos/crative-agency.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHdd, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
const hdd = <FontAwesomeIcon icon={faHdd} />
const comment = <FontAwesomeIcon icon={faCommentDots} />

const UserSettingMenu = () => {
    return (
        <div className="container userPanelDiv">
            <div className="panelLogo">
                <img className="img-fluid" src={logo} alt="logo" />
            </div>
            <div className="userSettingIcon">
                <ul className="iconList">
                    <Link className = "Link" to = "/order"><li>{shoppingCart} Order</li></Link>
                     <Link className = "Link" to = "/sarvice"><li>{hdd} Service list</li></Link>
                     <Link className = "Link" to = "/review"><li>{comment} Review</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default UserSettingMenu;