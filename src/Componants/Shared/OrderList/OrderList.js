import React from 'react';
import './OrderList.css';
import order from '../../Images/course.jpg';

const OrderList = (props) => {
    return (
        <div >
            <div style={{overflow: 'scroll'}} className="col-md-12 OrderListDetails">
                <div className="orderImg">
                    {/* <img src={`data:image/jpeg;base64,${props.img.img}`} alt=""/> */}
                    <img src={order} alt=""/>
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