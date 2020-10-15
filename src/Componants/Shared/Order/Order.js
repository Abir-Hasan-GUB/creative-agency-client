import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
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

    const handleFileChenge = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddOrder = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('productName', info.productName);
        formData.append('ProductDetails', info.ProductDetails);
        formData.append('price', info.price);

        fetch('https://frozen-hamlet-61699.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
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
                        <input onBlur = {handleBlur} type="email" placeholder="Your email address" name="email" id="" required />
                        <input onChange = {onChengName} name="" type="text" placeholder="Product Type" name="productName" id="productName" required />
                        <textarea onBlur = {handleBlur} placeholder="Project Details" name="ProductDetails" id="" cols="30" rows="5" required></textarea>
                        <div className="inputSlice">
                        <input onBlur = {handleBlur} className="slice1" type="num" placeholder="Price" name="price" id="" required />
                        <input onChange={handleFileChenge} className="slice2" type="file" name="file" id=""/>
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