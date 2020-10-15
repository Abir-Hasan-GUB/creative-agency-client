import React from 'react';

const ServiceListPerUser = (props) => {
    return (
        <div className="container row">
            <div className=" PerUser d-flex justify-content-between">
        <p className = "nameOfListUser">{props.name}</p>
        <p className = "mailOfListUser">{props.email}</p>
        <p className = "sarviceOfListUser">{props.productName}</p>
        <p className = "ProjectDetailsOfUser">{props.productDetails}</p>
        <p className = "statusOfUser">Pending</p>
    </div>
        </div>
    );
};

export default ServiceListPerUser;