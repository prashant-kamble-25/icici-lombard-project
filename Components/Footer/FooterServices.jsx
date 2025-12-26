import React, { useState } from "react";
import './../../Style/footerServices.css'
const FooterServices = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="footer-wrapper">
            {/* Header Titles */}
            <div className="footer-header">
                <div className="footer-titles">
                    <span>Products</span>
                    <span>Services</span>
                    <span>Legal</span>
                    <span>About Us</span>
                    <span>Others</span>
                </div>

                <span
                    className={`arrow ${open ? "rotate" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    ⌃
                </span>
            </div>

            {/* Dropdown Content */}
            {open && (
                <div className="footer-content">
                    <div className="column">
                        <h4>Products</h4>
                        <ul>
                            <li>Motor Insurance</li>
                            <li>Car Insurance</li>
                            <li>Two Wheeler Insurance</li>
                            <li>Health Insurance</li>
                            <li>Travel Insurance</li>
                            <li>Business Insurance</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Services</h4>
                        <ul>
                            <li>Customer Support</li>
                            <li>Retrieve Quote</li>
                            <li>Renew Your Policy</li>
                            <li>Portability</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Legal</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                            <li>Insurance Ombudsman</li>
                            <li>Whistle Blower Policy</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>About Us</h4>
                        <ul>
                            <li>Overview</li>
                            <li>Promoters</li>
                            <li>CSR</li>
                            <li>Investor Relations</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Others</h4>
                        <ul>
                            <li>Agents Portal</li>
                            <li>Corporate Login</li>
                            <li>Sitemap</li>
                            <li>Become an Agent</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
export default FooterServices;
