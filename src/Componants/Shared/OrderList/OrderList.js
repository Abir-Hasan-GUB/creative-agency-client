import React from 'react';
import './OrderList.css';
import order from '../../Images/icons/service1.png';

const OrderList = () => {
    return (
        <div className = "row">
            <div className="col-md-5 OrderListDetails">
                <div className="orderImg">
                    <img src={order} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default OrderList;