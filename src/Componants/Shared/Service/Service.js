import React from 'react';
import OrderList from '../OrderList/OrderList';
import UserSettingMenu from '../UserSettingMenu/UserSettingMenu';

const Service = () => {
    return (
        <div className="container">
             <div className="row">
           <div className="col-md-3">
                <UserSettingMenu></UserSettingMenu>
            </div>
            <div className="col-md-9 orderRight">
                <div className="topBarOfOrder d-flex justify-content-between">
                    <h3>Order</h3>
                    <h3>User Name</h3>
                </div>

                <div className="orderListInDetails">
                <div className = "row">
            <div className="col-md-12">
                <OrderList></OrderList>                
            </div>
        </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Service;