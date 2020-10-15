import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './ClientsFeedback.css';
import coustomar from '../../Images/customer-1.png';

const ClientsFeedback = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://frozen-hamlet-61699.herokuapp.com/showComents')
        .then(response => response.json())
        .then(data => setComments(data))
    },[])




    return (
        <div id="feedback" className="container">
            <div className="serviceTitle text-center ">
                <h2>Clients <span className="sarviceMarked" > Feedback</span></h2>

<div className="feedbacks">

    <div class="card-deck mt-5 row">

        {
            comments.map(comment=> <div style={{overflow: 'hidden'}} class="card">
            <div class="card-body">
                <div className="feedbackInfo d-flex align-items-center  row">
                    <div className="card-left col-md-3">
                        <img src= {coustomar} alt="" />
                    </div>
                    <div className="card-right col-md-9">
                        <h5 class="card-title">{comment.name}</h5>
                        <h6>{comment.designation}</h6>
                    </div>
                </div>
                <p class="card-text mt-3">{comment.message} </p>
            </div>
        </div>)
        }
        
    </div>
</div>
            </div>
        </div>
    );
};

export default ClientsFeedback;