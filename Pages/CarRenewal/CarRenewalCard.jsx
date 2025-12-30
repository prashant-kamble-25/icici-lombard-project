import React, { useState } from 'react'
import './../../Style/CarRenewal.css'
import CarTable from '../../Components/Table/Car_Table/CarTable';
import carData from './CarRenewal.json'

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
    color: "black"
};

const modalStyle = {
    background: "#eeecf5ff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px"
};

function CarRenewalCard() {
    const [optionValue, setOptionValue] = useState("registration");
    const [inputValue, setInputValue] = useState("");
    const [carUser, setCarUser] = useState(null);
    const [error, setError] = useState("");
    const [showModel, setShowModal] = useState(false)

    const handleClick = () => {

        console.log("Clicked");
        let carResult;
        if (optionValue === "registration") {
            carResult = carData.find(
                e => e.regNo === inputValue
            )
        } else {
            carResult = carData.find(
                e => e.policyNo === inputValue
            );
        }
        if (carResult) {
            setCarUser(carResult);
            setShowModal(true)
            setError("");
        } else {
            setCarUser(null);
            setShowModal(false)
            setError("No record found");
        }

    }

    return (
        <div className='car-renewal-main'>
            <div className='renewal-card'>
                <div className="card-wrapper">
                    <div className="insurance-card">
                        <h2 className="title">Car Insurance Renewal</h2>
                        <p className="subtitle">
                            Choose below option to retrieve your policy
                        </p>

                        <div className="radio-group">
                            <label className="radio-item">
                                <input
                                    type="radio"
                                    //   name="searchBy"
                                    value="Registration"
                                    checked={optionValue === "registration"}
                                    onChange={(e) => {
                                        setOptionValue(e.target.value);
                                        setInputValue("");
                                        setCarUser(null);
                                        setError("")
                                    }}

                                />
                                <span className="custom-radio"></span>
                                Registration No
                            </label>

                            <label className="radio-item">
                                <input
                                    type="radio"
                                    //   name="searchBy"
                                    value="policy"
                                    checked={optionValue === "policy"}
                                    onChange={(e) => {
                                        setOptionValue(e.target.value);
                                        setInputValue("");
                                        setCarUser(null);
                                        setError("")
                                    }}
                                />
                                <span className="custom-radio"></span>
                                Policy No
                            </label>
                        </div>

                        <div className="input-section">
                            <label className="input-label">{optionValue}</label>
                            <input type="text" className="underline-input"
                                placeholder={optionValue}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                style={{ color: "black" }} />
                        </div>

                        <div className="action-row">
                            <button className="proceed-btn" onClick={handleClick}>Proceed</button>
                            <a href="#" className="login-link">
                                Click here to login for quicker renewal
                            </a>
                        </div>
                        {showModel && carUser && (
                            <div style={overlayStyle}>
                                <div style={modalStyle}>
                                    <h2>User Details</h2>
                                    <p>Registration No. : {carUser.regNo}</p>
                                    <p>{carUser.policyNo}</p>
                                    <p>{carUser.carNo}</p>
                                    
                                    <button onClick={()=>setShowModal(false)} 
                                        style={{ height: "40px", width: "100%", borderRadius: "10px", color: "white", background: "#46aa18ff" }}>
                                        <b>Close</b>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div>
                <CarTable />
            </div>
            <div>
                <p>Disclaimers: *If there is any revision in Motor Third Party (TP) rates, the difference in premium due to the revised rates will be payable by the policyholder immediately, and if such revised premium is not paid then the motor insurance policy will not be valid. <br />

                    *We have masked your personal information for security.</p>
            </div>
            <div>
                <a href="https://www.icicilombard.com/insurance-disclaimer?id=car-disc" target='_blank'>Disclaimers</a>
            </div>

        </div>
    )
}

export default CarRenewalCard;
