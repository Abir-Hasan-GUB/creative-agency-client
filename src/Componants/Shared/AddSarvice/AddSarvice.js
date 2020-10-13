import React from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';
import './AddSarvice.css';

const AddSarvice = () => {
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
                  <div className="col-md-6 addSarviceLeft">
                      
                      <h6>Sarvice Title</h6>
                        <input placeholder = "Enter title" type="text" name="" id="" required/>
                        <h6>description</h6>
                        <textarea placeholder="Enter Designation" name="" id="" cols="30" rows="3" required></textarea>
                        <input className = "btn btn-success sar footerSendBtn addSarviceBtn"type="submit" value="Submit"/>
                      
                  </div>
                  <div className="col-md-6 SarviceRight">
                      <h6>Icon</h6>
                      <input className ="IconUpload" type="file" name="" id="" required/>
                  </div>
               </div>
              </form>
            </div>
        </div>
       </div>
    </div>
    );
};

export default AddSarvice;