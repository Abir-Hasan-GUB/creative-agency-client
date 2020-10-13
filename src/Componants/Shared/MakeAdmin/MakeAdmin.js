import React from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';
import './MakeAdmin.css';

const MakeAdmin = () => {
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
                        <form action="">
                            <div className="addSarvice row">
                                <div className="col-md-9 addSarviceLeft makeAdmin">

                                    <h6>Email</h6>
                                    <input type="email" placeholder="Your email address" name="" id="" required />
                                    <input className="btn btn-success addAdminBtn footerSendBtn" type="submit" value="Submit" />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;