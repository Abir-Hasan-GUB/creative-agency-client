import React from 'react';
import './OrderList.css';
import order from '../../Images/icons/service1.png';

const OrderList = (props) => {
    console.log(props)
    // orders.map(order => <OrderList name={order.name} productName = {order.productName} ProductDetails = {order.productDetails}></OrderList>)
    return (
        <div >
            <div style={{overflow: 'scroll'}} className="col-md-12 OrderListDetails">
                <div className="orderImg">
                    <img src={`data:image/jpeg;base64,${props.img.img}`} alt=""/>
                    <button className="btn btn-dark statusBtn">Status</button>
                </div>
                <div className="orderText ">
                    <h3>{props.productName}</h3>
                    <p>{props.ProductDetails}</p>
                </div>
            </div>
            
        </div>
    );
};

export default OrderList;