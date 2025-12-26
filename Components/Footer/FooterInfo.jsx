import React, { useState } from "react";
import './../../Style/footerInfo.css'

const InfoFooter = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="info-footer-wrapper">
            {/* Header */}
            <div className="info-footer-header">
                <div className="info-titles">
                    <span>Info Center</span>
                    <span>Renewal</span>
                    <span>Claim</span>
                    <span>Help</span>
                    <span>Customer Reviews</span>
                </div>

                <span
                    className={`arrow ${open ? "rotate" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    ⌃
                </span>
            </div>

            {/* Content */}
            {open && (
                <div className="info-footer-content">
                    <div className="column">
                        <h4>Info Center</h4>
                        <ul>
                            <li>Cashless Hospitals</li>
                            <li>Cashless Garages</li>
                            <li>Branch Network</li>
                            <li>Blogs</li>
                            <li>Expert Blogs</li>
                            <li>Info Centre</li>
                            <li>FAQs</li>
                            <li>Knowledge Center</li>
                            <li>Downloads</li>
                            <li>Corporate India Risk Index</li>
                            <li>Testimonials</li>
                            <li>Glossary</li>
                            <li>SME Blogs</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Renewal</h4>
                        <ul>
                            <li>All Policy Renewal</li>
                            <li>Car Policy Renewal</li>
                            <li>Bike Policy Renewal</li>
                            <li>Health Policy Renewal</li>
                            <li>Home Policy Renewal</li>
                            <li>Travel Policy Renewal</li>
                            <li>Business Insurance Renewal</li>
                            <li>Arogya Sanjeevani Renewal</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Claim</h4>
                        <ul>
                            <li>Health Insurance Claims</li>
                            <li>Download Health Insurance Claim Form</li>
                            <li>ICICI Lombard Partner Hospitals</li>
                            <li>Motor Insurance Claims</li>
                            <li>Travel Insurance Claims</li>
                            <li>Home Insurance Claims</li>
                            <li>Cyber Insurance Claims</li>
                            <li>Corporate Claims</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Help</h4>
                        <ul>
                            <li>Get in Touch</li>
                            <li>Live Chat</li>
                            <li>Whatsapp Notification</li>
                            <li>Grievance Redressal</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Customer Reviews</h4>
                        <ul>
                            <li>Car Insurance Customer Reviews</li>
                            <li>Two Wheeler Insurance Customer Reviews</li>
                            <li>Health Insurance Customer Reviews</li>
                            <li>Travel Insurance Customer Reviews</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoFooter;
