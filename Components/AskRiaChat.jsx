import React from "react";
import "./../Style/AskRiaChat.css";

const AskRiaChat = () => {
    return (
        <div className="ask-ria-container">
            <div className="ria-avatar">
                <img
                    src="https://i.ibb.co/9h1RZ6q/chat-avatar.png"
                    alt="Ask RIA"
                />
            </div>

            <div className="ria-text">
                <span className="title">ASK RIA</span>
                <span className="sub">LIVE CHAT</span>
            </div>
        </div>
    );
};

export default AskRiaChat;
