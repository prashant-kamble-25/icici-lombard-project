import React, { useState } from 'react'
import BikeTable from '../../Components/Table/Bike_Table/BikeTable';
import bikeData from './BikeRenewal.json'

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


function BikeRenewalCard() {
    const [option, setOption] = useState("registration");
    const [inputValue, setInputValue] = useState("");
    const [bikeUser, setBikeUser] = useState(null);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        console.log("clicked")
        let result;
        if (option === "registration") {
            result = bikeData.find(
                e => e.regNo === inputValue
            )
        } else {
            result = bikeData.find(
                e => e.policyNo === inputValue
            )
        }

        if (result) {
            setBikeUser(result);
            setShowModal(true);
            setError("");
        } else {
            setBikeUser(null);
            setShowModal(false);
            setError("No record found")
        }
    }
    return (
        <div className='car-renewal-main'>
            <div className='renewal-card'>
                <div className="card-wrapper">
                    <div className="insurance-card">
                        <h2 className="title">Bike Insurance Renewal</h2>
                        <p className="subtitle">
                            Choose below option to retrieve your policy
                        </p>

                        <div className="radio-group">
                            <label className="radio-item">
                                <input
                                    type="radio"
                                    name="searchBy"
                                    value="registration"
                                    checked={option === "registration"}
                                    onChange={() => setOption("registration")}
                                />
                                <span className="custom-radio"></span>
                                Registration No
                            </label>

                            <label className="radio-item">
                                <input
                                    type="radio"
                                    name="searchBy"
                                    value="policy"
                                    checked={option === "policy"}
                                    onChange={() => setOption("policy")}
                                />
                                <span className="custom-radio"></span>
                                Policy No
                            </label>
                        </div>

                        <div className="input-section">
                            <label className="input-label">{option}</label>
                            <input type="text" className="underline-input"
                                placeholder={option}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                style={{ color: "black" }} />
                        </div>

                        <div className="action-row">
                            <button className="proceed-btn"
                                onClick={handleClick}>Proceed</button>

                            <a href="#" className="login-link">
                                Click here to login for quicker renewal
                            </a>
                        </div>

                        {showModal && bikeUser && (
                            <div style={overlayStyle}>
                                <div style={modalStyle}>
                                    <h2>User Details</h2>
                                    <p>{bikeUser.regNo}</p>;
                                    <p>{bikeUser.policyNo}</p>
                                    <p>{bikeUser.bikeNo}</p>

                                    <button onClick={() => setShowModal(false)}
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
                <BikeTable />
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

export default BikeRenewalCard;
