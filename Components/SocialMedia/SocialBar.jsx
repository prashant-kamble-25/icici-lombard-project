import React from "react";
import './../../Style/socialBar.css'
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialBar = () => {
    return (
        <div className="social-bar">
            {/* Left - Social Icons */}
            <div className="social-icons">
                <FaFacebookF />
                <FaInstagram />
                <FaXTwitter />
                <FaYoutube />
                <FaLinkedinIn />
            </div>

            {/* Right - App Section */}
            <div className="app-section">
                <span className="app-text">IL TakeCare App</span>

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                />

                <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                />
            </div>
        </div>
    );
};

export default SocialBar;
