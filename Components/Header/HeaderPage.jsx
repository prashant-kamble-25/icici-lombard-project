import React, { useState } from "react";
import './../../Style/header.css'


const Header = () => {
    const [isLogin, setIsLogin] = useState(false)

    const handleLogin = ()=>{
        if(!isLogin){
            setIsLogin(true)
            prompt("Enter your Mobile Number")
        }
    }
    return (
        <header className="top-header">
            {/* Left Section */}
            <div className="left">
                <span className="callback"> Call Back</span>
                <span className="live-chat">
                    <span className="dot"></span> Live Chat
                </span>
            </div>

            {/* Right Section */}
            <div className="right">
                <select>
                    <option>Help</option>
                    <option>FAQ</option>
                    <option>Support</option>
                </select>

                <select>
                    <option>Info Centre</option>
                    <option>About Us</option>
                    <option>Contact</option>
                </select>

                <span>Investor Relations</span>

                <button className="advisor-btn">Become an advisor</button>
                <button className="login-btn" onClick={handleLogin}>Login</button>
            </div>
        </header>
    );
};

export default Header;
