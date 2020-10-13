import React from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';
import ServiceListPerUser from '../SarviceListPerUser/ServiceListPerUser';
import './SarviceList.css';

const SarviceList = () => {
    return (
        <div className="container review">
        <div className="row">
       <div className="col-md-3">
            <AdminPanel></AdminPanel>
        </div>
        <div className="col-md-9 orderRight">
            <div className="topBarOfOrder d-flex justify-content-between">
                <h3>Order</h3>
                <h3>User Name</h3>
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
                <ServiceListPerUser></ServiceListPerUser>
            </div>
        </div>
       </div>
    </div>
    );
};

export default SarviceList;