import React, { useContext, useEffect, useState } from 'react';
import logo from '../../Images/logos/crative-agency.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHdd, faUserPlus, faShoppingCart, faCommentDots} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AdminPanel.css';
import { UserContext } from '../../../App';

const addSarvice = <FontAwesomeIcon icon={faPlus} />
const hdd = <FontAwesomeIcon icon={faHdd} />
const addPeople = <FontAwesomeIcon icon={faUserPlus} />
const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
const comment = <FontAwesomeIcon icon={faCommentDots} />

const AdminPanel = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin,setisAdmin] = useState(false);

    useEffect(() =>{
        fetch('https://frozen-ridge-88734.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(response => response.json())
        .then(data => setisAdmin(data))
    },[])
    return (
        <div className="container userPanelDiv">
            <div className="panelLogo">
                <Link to="/"><img className="img-fluid" src={logo} alt="logo" /></Link>
            </div>
            
            <div className="userSettingIcon">
                <ul className="iconList">
                    
                        {/* verify admin */}
                    {isAdmin && <div> 
                    <Link className = "Link" to = "/sarviceList"><li>{hdd} Service list</li></Link>
                    <Link className = "Link" to = "/addSarvice"><li>{addSarvice} Add Service</li></Link>
                     <Link className = "Link" to = "/makeAdmin"><li>{addPeople} Make Admin </li></Link>
                    </div>}

                { !isAdmin && <div>
                            {/* for normal user  */}
                        <Link className = "Link" to = "/order"><li>{shoppingCart} Order</li></Link>
                        <Link className = "Link" to = "/sarvice"><li>{hdd} Service list</li></Link>
                        <Link className = "Link" to = "/review"><li>{comment} Review</li></Link>
                    </div>}
                </ul>
            </div>
            
            
        </div>
    );
};

export default AdminPanel;