import React, { useEffect, useState } from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';
import OrderList from '../OrderList/OrderList';
import UserSettingMenu from '../UserSettingMenu/UserSettingMenu';

const Service = () => {

    const[orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showOrder')
        .then(response => response.json())
        .then(data => setOrders(data))
    },[])

    return (
        <div className="container">
             <div className="row">
           <div className="col-md-3">
                <AdminPanel></AdminPanel>
            </div>
            <div className="col-md-9 orderRight">
                <div className="topBarOfOrder d-flex justify-content-between">
                    <h3>Service List</h3>
                    <h3>User Name</h3>
                </div>

                <div className="orderListInDetails">
                <div className = "row">
            <div className="col-md-6 float-left">
            {/* <OrderList></OrderList>  */}

            {
                orders.map(order => <OrderList name={order.name} productName = {order.productName} ProductDetails = {order.ProductDetails}></OrderList>)
            }               
               
                  
            </div>
        </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Service;