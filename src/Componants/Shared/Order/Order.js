import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onChengName = (e) => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleAddOrder = () => {
        const orderInfo = {status: 'pending', email: "loggedInUser.email" , ...info, createdTime: new Date()};
        fetch('http://localhost:5000/addOrder',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(response => response.json())
        .then(success => {})
    }



    return (
        <div className="container order">
            <div className="row">
           <div className="col-md-3">
                <AdminPanel></AdminPanel>
            </div>
            <div className="col-md-9 orderRight">
                <div className="topBarOfOrder d-flex justify-content-between">
                    <h3>Order</h3>
                    <h3>{loggedInUser.name}</h3>
                </div>

                <div className="orderListInDetails">
                <div className = "row">
            <div className="col-md-12">
                <div className="orderImg footerRight">
                <form onSubmit={handleAddOrder}>
                        <input onBlur = {handleBlur} type="text" placeholder="Your name / company’s name" name="name" id="" required />
                        <input value ={loggedInUser.email} type="email" placeholder="Your email address" name="email" id="" required />
                        <input onChange = {onChengName} name="" type="text" placeholder="Product Type" name="productName" id="productName" required />
                        <textarea onBlur = {handleBlur} placeholder="Project Details" name="ProductDetails" id="" cols="30" rows="5" required></textarea>
                        <div className="inputSlice">
                        <input onBlur = {handleBlur} className="slice1" type="num" placeholder="Price" name="price" id="" required />
                        <input className="slice2" type="file" name="file" id="" required/>
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