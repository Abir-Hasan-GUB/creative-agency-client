import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';
import ServiceListPerUser from '../SarviceListPerUser/ServiceListPerUser';
import './SarviceList.css';

const SarviceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[sarvice, setSarvice] = useState([]);

    useEffect(() => {
        fetch('https://frozen-ridge-88734.herokuapp.com/showAllService')
        .then(response => response.json())
        .then(data => setSarvice(data))
    },[])


    return (
        <div className="container review">
        <div className="row">
       <div className="col-md-3">
            <AdminPanel></AdminPanel>
        </div>
        <div className="col-md-9 orderRight">
            <div className="topBarOfOrder d-flex justify-content-between">
                <h3>Sarvice List</h3>
                <h3>{loggedInUser.name}</h3>
            </div>

            <div className="orderListInDetails">
                <div className="OrderListRow d-flex justify-content-between">
                    <p>Name</p>
                    <p>Email ID</p>
                    <p>Sarvice</p>
                    <p>Project Details</p>
                    <p>Status</p>
                </div>

                
                {/* show sarvice lise sirially */}
                {
                    sarvice.map(perSarvice => <ServiceListPerUser name={perSarvice.name} email={perSarvice.email} productName = {perSarvice.productName} productDetails = {perSarvice.ProductDetails} price = {perSarvice.price}></ServiceListPerUser>)
                }
                {/* <ServiceListPerUser></ServiceListPerUser> */}
            </div>
        </div>
       </div>
    </div>
    );
};

export default SarviceList;