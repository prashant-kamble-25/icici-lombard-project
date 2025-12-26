import React, { useState } from "react";
import './../../Style/AllRenewSection.css'
import './../../assets/All-Policy-Renewal/quick-renwl.svg'
import { Formik } from 'formik';
import policyData from './AllRenewal.json'
import { ToastContainer, toast } from 'react-toastify';

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    color:"black"
};

const modalStyle = {
    background: "#eeecf5ff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px"
};


const AllRenewSection = () => {
    const [renewType, setRenewType] = useState("Policy Number");
    const [inputValue, setInputValue] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleProceed = ()=>{
        let result = "";

        if(renewType === "Policy Number"){
            result = policyData.find(
                e => e.policyNumber === inputValue
            )
        } else if (renewType === "Phone Number"){
            result = policyData.find(
                e => e.phoneNumber === inputValue
            )
        } else if (renewType === "Vehicle Registration Number"){
            result = policyData.find(
                e => e.vehicleNumber === inputValue
            )
        } else {
            result = policyData.find(
                e => e.loanAccountNumber === inputValue
            )
        }
        
        if (result) {
            setUserData(result);
            setShowModal(true);   
            setError("");
        } else {
            setUserData(null);
            setError("❌ No record found");
        }

        console.log("Submitted")
    }
    return (
        <section className="renew-container">
            {/* Left Content */}
            <div className="left-content">
                <h1>
                    Renew now and <br /> stay protected!
                </h1>

                <ul className="features">
                    <li><img src="https://www.icicilombard.com/docs/default-source/angular/assets/images/quick-renwl.svg" alt="" /> Quick & easy renewal</li>
                    <li><img src="https://www.icicilombard.com/docs/default-source/angular/assets/images/ren_benefits.svg" alt="" /> Avail renewal benefits</li>
                    <li><img src="https://www.icicilombard.com/docs/default-source/angular/assets/images/assured-low-pre.svg" alt="" /> Low premium Assured</li>
                </ul>
            </div>
{/* --------------------------------------------- Right side --------------------------------------------------------- */}
            {/* Right Form */}
            <div className="right-content">
                
                <div>
                    
                <label >Renew with</label>
                    <select className="dropdown-select" 
                        value={renewType}
                        onChange={(e) => {
                            setRenewType(e.target.value);
                            setInputValue("");
                            setUserData(null);
                            setError("");
                        }}>
                        <option value="Policy Number">Policy number</option>
                        <option value="Phone Number">Phone number</option>
                        <option value="Vehicle Registration Number">Vehicle registration number</option>
                        <option value="Loan Account Number">Loan account number</option>
                </select>
                </div>
    
                <label >{renewType}</label> <br />
                <input 
                    type="text"
                    placeholder={renewType}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                     />
                {error && <p style={{ color: "red", fontSize:"10px" }}>{error}</p>}

                <button className="proceed-btn" onClick={handleProceed}>Proceed</button>

                {showModal && userData && (
                    <div style={overlayStyle}>
                        <div style={modalStyle}>                    
                        
                            <h4>User Details</h4>
                            <p><b>Policy:</b> {userData.policyNumber}</p>
                            <p><b>Name:</b> {userData.name}</p>
                            <p><b>Place:</b> {userData.address}</p>
                            <p><b>Phone:</b> {userData.phoneNumber}</p>
                            <p><b>Email:</b>{userData.emailId}</p> 

                            <button onClick={() => setShowModal(false)} 
                                style={{height:"40px", width:"100%", borderRadius:"10px", color:"red", background:""}}>
                                <b>Close</b>
                            </button>                           
                          
                        </div>
                    </div>
                )}
            </div>

            
        </section>
    );
};

export default AllRenewSection;
