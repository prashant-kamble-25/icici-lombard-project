import React, { useState } from "react";
import './../../Style/InsuranceFooter.css'

const InsuranceFooter = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="insurance-wrapper">
            {/* HEADER */}
            <div className="insurance-header">
                <div className="insurance-titles">
                    <span>Car Insurance</span>
                    <span>Two Wheeler Insurance</span>
                    <span>Health Insurance</span>
                    <span>Travel Insurance</span>
                    <span>SME Insurance</span>
                </div>

                <div
                    className={`arrow ${open ? "rotate" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    ⌄
                </div>
            </div>

            {/* DROPDOWN */}
            {open && (
                <div className="insurance-content">
                    <div className="column">
                        <h4>Car Insurance</h4>
                        <ul>
                            <li>Comprehensive Car Insurance</li>
                            <li>Third Party Car Insurance</li>
                            <li>Car Insurance Renewal</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Two Wheeler Insurance</h4>
                        <ul>
                            <li>Bike Insurance</li>
                            <li>Bike Insurance Renewal</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Health Insurance</h4>
                        <ul>
                            <li>Individual Health Insurance</li>
                            <li>Family Floater Health Insurance</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Travel Insurance</h4>
                        <ul>
                            <li>International Travel Insurance</li>
                            <li>Domestic Travel Insurance</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>SME Insurance</h4>
                        <ul>
                            <li>Business Insurance</li>
                            <li>Cyber Insurance</li>
                        </ul>
                    </div>
                </div>
            )}
            <hr />
        </div>
    );
};


export default InsuranceFooter;
