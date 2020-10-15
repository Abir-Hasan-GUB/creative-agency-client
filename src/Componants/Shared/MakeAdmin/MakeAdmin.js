import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';
import './MakeAdmin.css';
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const handleAddSarvice = () => {
        const adminMail = document.getElementById('adminMail').value;
        const AdminInfo = {email:adminMail, name:"admin", createdTime: new Date()};

        fetch('http://localhost:5000/addAdmin',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(AdminInfo)
        })
        .then(response => response.json())
        .then(success => {})
    }
   
    return (
        <div className="container review">
            <div className="row">
                <div className="col-md-3">
                    <AdminPanel></AdminPanel>
                </div>
                <div className="col-md-9 orderRight">
                    <div className="topBarOfOrder d-flex justify-content-between">
                        <h3>Make Admin</h3>
                        <h3>{loggedInUser.name}</h3>
                    </div>

                    <div className="orderListInDetails">
                        <form>
                            
                            <div className="addSarvice row">
                                <div className="col-md-9 addSarviceLeft makeAdmin">

                                    <h6>Email</h6>
                                    <input type="email" placeholder="Your email address" name="" id="adminMail" required />
                                    <input onClick = {handleAddSarvice} className="btn btn-success addAdminBtn footerSendBtn" type="submit" value="Submit" />
                                    
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;