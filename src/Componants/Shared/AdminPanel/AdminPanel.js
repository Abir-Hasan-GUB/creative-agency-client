import React from 'react';
import logo from '../../Images/logos/crative-agency.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHdd, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
{/* <i class="fas fa-plus"></i> */}
{/* <i class="fas faUserPlus"></i> */}
const addSarvice = <FontAwesomeIcon icon={faPlus} />
const hdd = <FontAwesomeIcon icon={faHdd} />
const addPeople = <FontAwesomeIcon icon={faUserPlus} />

const AdminPanel = () => {
    return (
        <div className="container userPanelDiv">
            <div className="panelLogo">
                <Link to="/"><img className="img-fluid" src={logo} alt="logo" /></Link>
            </div>
            <div className="userSettingIcon">
                <ul className="iconList">
                     <Link className = "Link" to = "/sarviceList"><li>{hdd} Service list</li></Link>
                    <Link className = "Link" to = "/addSarvice"><li>{addSarvice} Add Service</li></Link>
                     <Link className = "Link" to = "/makeAdmin"><li>{addPeople} Make Admin </li></Link>
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;