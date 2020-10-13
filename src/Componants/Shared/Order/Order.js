import React from 'react';
import UserSettingMenu from '../UserSettingMenu/UserSettingMenu';
import './Order.css';

const Order = () => {
    return (
        <div className="container order">
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
                <div className="orderImg footerRight">
                <form action="">
                        <input type="text" placeholder="Your name / company’s name" name="" id="" required />
                        <input type="email" placeholder="Your email address" name="" id="" required />
                        <input type="text" placeholder="Product Type" name="" id="" required />
                        <textarea placeholder="Project Details" name="" id="" cols="30" rows="5" required></textarea>
                        <div className="inputSlice">
                        <input className="slice1" type="num" placeholder="Price" name="" id="" required />
                        <input className="slice2" type="file" name="fileUpload" id=""/>
                        </div>
                        <input className="btn btn-dark footerSendBtn" type="submit" value="send" />
                    </form>
                </div>                
            </div>
        </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Order;