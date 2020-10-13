import React from 'react';
import './OrderList.css';
import order from '../../Images/icons/service1.png';

const OrderList = () => {
    return (
        <div className = "row">
            <div className="col-md-5 OrderListDetails">
                <div className="orderImg">
                    <img src={order} alt=""/>
                    <button className="btn btn-dark statusBtn">Status</button>
                </div>
                <div className="orderText ">
                    <h3>Web & Mobile design</h3>
                    <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                </div>
            </div>
            
        </div>
    );
};

export default OrderList;