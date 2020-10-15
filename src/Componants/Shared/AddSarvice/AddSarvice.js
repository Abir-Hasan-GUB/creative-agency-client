import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel';
import './AddSarvice.css';

const AddSarvice = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChenge = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddSarvice = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('designation', info.designation);

        fetch('http://localhost:5000/addSarvice', {
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
                                    <input onChange={handleFileChenge} className="IconUpload" type="file" name="file" id="" required />
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