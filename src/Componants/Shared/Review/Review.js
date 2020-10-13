import React from 'react';
import OrderList from '../OrderList/OrderList';
import UserSettingMenu from '../UserSettingMenu/UserSettingMenu';

const Review = () => {
    return (
        <div className="container review">
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
                        <input type="email" placeholder="Your email address" name="" id="" required />
                        <input type="text" name="" id="" placeholder="Company’s name, Designation" required />
                        <textarea placeholder="Your message" name="" id="" cols="30" rows="5" required></textarea>
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

export default Review;