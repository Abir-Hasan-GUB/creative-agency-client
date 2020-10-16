import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const addComments = () => {
        let CompanyDesignation = document.getElementById('CompanyDesignation').value;
        let reviewMessage = document.getElementById('reviewMessage').value;
        let userNameForReview = document.getElementById('userNameForReview').value;

        let commentsInfo = {designation: CompanyDesignation,message: reviewMessage,name: userNameForReview,photoURL:loggedInUser.photoURL};

        fetch('http://localhost:5000/addComments',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(commentsInfo)
        })
        .then(response => response.json())
        .then(success => {})
    }

    return (
        <div className="container review">
            <div className="row">
           <div className="col-md-3">
                <AdminPanel></AdminPanel>
            </div>
            <div className="col-md-9 orderRight">
                <div className="topBarOfOrder d-flex justify-content-between">
                    <h3>Review</h3>
                    <h3>{loggedInUser.name}</h3>
                </div>

                <div className="orderListInDetails">
                <div className = "row">
            <div className="col-md-12">
                <div className="orderImg footerRight">
                <form onSubmit = {addComments}>
                        <input id="userNameForReview" type="text" placeholder="Your Name" name="" required />
                        <input type="text" name="" id="CompanyDesignation" placeholder="Company’s name, Designation" required />
                        <textarea placeholder="Your message" name="" id="reviewMessage" cols="30" rows="5" required></textarea>
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