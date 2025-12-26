import React, { useState } from "react";
import './../../Style/navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <img
                    src="https://www.icicilombard.com/docs/default-source/assets/home-revamp/images/il-logo.png?ver=03012025"
                    alt="ICICI Lombard"
                />
            </div>

            {/* Menu */}
            <ul className="menu">
                <li>
                    
                </li>
                <li>Motor Insurance ▾</li>
                <li>Health Insurance ▾</li>
                <li>Travel Insurance ▾</li>
                <li>SME Insurance ▾</li>
                <li>Corporate Insurance ▾</li>
                <li>Other Insurance ▾</li>
                
            <li>
            <Dropdown className="renewal-dropdown" style={{width : "auto", border: "none"}}>
                <Dropdown.Toggle className="nav-dropdown-btn">
                    Renewals
                </Dropdown.Toggle>

                <Dropdown.Menu className="renewal-menu">
                    <Dropdown.Item>
                        <Link to='/renew-policy-online/AllRenewal' >All Renewal</Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Link to='/motor-insurance/car-insurance/renewal/' >Car Renewal</Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Link to='/motor-insurance/bike-insurance/renewal/' >Bike Renewal</Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        Health Policy Renewal
                    </Dropdown.Item>

                    <Dropdown.Item>
                        Home Policy Renewal
                    </Dropdown.Item>

                    <Dropdown.Item>
                         Travel Policy Renewal
                    </Dropdown.Item>

                    <Dropdown.Item>
                         Business Insurance Renewal
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </li>
            <li>Claims ▾</li>
            </ul>
            
        </nav>
    );
};

export default Navbar;
