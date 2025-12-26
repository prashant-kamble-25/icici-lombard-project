import React from "react";
import './../../Style/MiddleSection.css'


const MiddleSection = () => {
    return (
        <footer className="MiddleSection">
            <p className="company-name">
                ICICI Lombard General Insurance Company Limited,
            </p>

            <p className="address">
                ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple,
                Prabhadevi, Mumbai - 400025.
            </p>

            <p className="details">
                Reg. No.: 115 | Email:
                <a href="mailto:customersupport@icicilombard.com">
                    customersupport@icicilombard.com
                </a>
                | Fax no - 022 61961323 | Contact - 1800 2666 (Available 24 x 7)
            </p>
        </footer>
    );
};

export default MiddleSection;
