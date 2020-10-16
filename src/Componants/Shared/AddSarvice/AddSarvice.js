import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';
import './AddSarvice.css';

const AddSarvice = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleAddSarvice = () => {
        const sarviceInfo = {...info, createdTime: new Date()};

        fetch('http://localhost:5000/addSarvice',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(sarviceInfo)
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
                        <h3>Add Sarvice</h3>
                        <h3>{loggedInUser.name}</h3>
                    </div>

                    <div className="orderListInDetails">
                        <form onSubmit={handleAddSarvice}>
                            <div className="addSarvice row">
                                <div className="col-md-6 addSarviceLeft">

                                    <h6>Sarvice Title</h6>
                                    <input onBlur = {handleBlur} placeholder="Enter title" type="text" name="name" id="ab" required />
                                    <h6>description</h6>
                                    <textarea onBlur = {handleBlur} placeholder="Enter Designation" name="designation" id="" cols="30" rows="3" required></textarea>
                                    <input className="btn btn-success sar footerSendBtn addSarviceBtn" type="submit" value="Submit" />

                                </div>
                                <div className="col-md-6 SarviceRight">
                                    <h6>Icon</h6>
                                    <input className="IconUpload" type="file" name="file" id="" required />
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