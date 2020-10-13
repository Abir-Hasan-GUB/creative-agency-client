import React from 'react';
import './ClientsFeedback.css';
import customer1 from '../../Images/customer-1.png';
import customer2 from '../../Images/customer-2.png';
import customer3 from '../../Images/customer-3.png';

const ClientsFeedback = () => {
    return (
        <div id="feedback" className="container">
            <div className="serviceTitle text-center ">
                <h2>Clients <span className="sarviceMarked" > Feedback</span></h2>

<div className="feedbacks">

    <div class="card-deck mt-5 row">

        <div class="card">
            <div class="card-body">
                <div className="feedbackInfo d-flex align-items-center  row">
                    <div className="card-left col-md-3">
                        <img src={customer1} alt="" />
                    </div>
                    <div className="card-right col-md-9">
                        <h5 class="card-title">Nash Patrik</h5>
                        <h6>CEO, Manpol</h6>
                    </div>
                </div>
                <p class="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div className="feedbackInfo d-flex align-items-center  row">
                    <div className="card-left col-md-3">
                        <img src={customer2} alt="" />
                    </div>
                    <div className="card-right col-md-9">
                        <h5 class="card-title">Miriam Barron</h5>
                        <h6>CEO, Manpol</h6>
                    </div>
                </div>
                <p class="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div className="feedbackInfo d-flex align-items-center  row">
                    <div className="card-left col-md-3">
                        <img src={customer3} alt="" />
                    </div>
                    <div className="card-right col-md-9">
                        <h5 class="card-title">Bria Malone</h5>
                        <h6>CEO, Manpol</h6>
                    </div>
                </div>
                <p class="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            </div>

        </div>
    </div>
</div>
            </div>
        </div>
    );
};

export default ClientsFeedback;