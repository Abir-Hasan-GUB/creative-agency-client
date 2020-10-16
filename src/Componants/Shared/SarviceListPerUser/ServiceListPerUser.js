import React, { useState } from 'react';
import './SarviceListPerUser.css';

const ServiceListPerUser = (props) => {
    const [select,setSelect] = useState(null);

    function hanleSelect() {
        var x = document.getElementById("mySelect");
  var i = x.selectedIndex;
  setSelect(x.options[i].text)
  console.log(x.options[i].text)
      }

      function updateStatus(){
          console.log("Upaditng")
      }

    return (
        <div className="container row">
            <div className=" PerUser d-flex justify-content-between">

                <p className="nameOfListUser">{props.name}</p>
                <p className="mailOfListUser">{props.email}</p>
                <p className="sarviceOfListUser">{props.productName}</p>
                <p className="ProjectDetailsOfUser">{props.productDetails}</p>
                <p className="statusOfUser">
                    <form>
                        
                        <select id="mySelect" onChange={hanleSelect}>
                            <option onChange={updateStatus} className = "text-danger">Pending</option>
                            <option onChange={updateStatus} className = "text-success">Done</option>
                            <option onChange={updateStatus} className = "text-warning">On Going</option>
                        </select>
                        
</form>
                </p>
            </div>
        </div>
    );
};

export default ServiceListPerUser;