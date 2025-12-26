import React, { useState } from "react";
import "./../../Style/BottomFooter.css";

const companies = [
    "ICICI Group",
    "ICICI Bank",
    "ICICI Prudential Life Insurance",
    "ICICI Prudential Mutual Fund",
    "ICICI Direct",
    "ICICI Home Finance",
    "ICICI Home Search",
    "ICICI Lombard",
    "ICICI Securities",
    "ICICI Venture"
];

const BottomFooter = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bottom-footer">
            {/* LEFT SECTION */}
            <div className="footer-left">
                <p>
                    ICICI Lombard General Insurance Company Ltd. is one of the leading
                    private sector general insurance company in India offering insurance
                    coverage for motor, health, travel, home, student travel and more.
                    Policies can be purchased and renewed online as well. Immediate
                    issuance of policy copy online.
                </p>

                <p>
                    ICICI trade logo displayed above belongs to ICICI Bank and is used by
                    ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI
                    Lombard GIC Ltd. Insurance is the subject matter of the solicitation.
                    The advertisement contains only an indication of cover offered. For
                    more details on risk factors, terms, conditions and exclusions, please
                    read the sales brochure carefully before concluding a sale.
                    CIN: L67200MH2000PLC129408
                </p>

                {/* Logos */}
                <div className="footer-logos">
                    <img
                        src="https://www.icicilombard.com/docs/default-source/assets/images/entrust.png"
                        alt="Entrust"
                    />
                    <img
                        src="https://www.icicilombard.com/docs/default-source/assets/images/digicert.png"
                        alt="Digicert"
                    />
                    <img
                        src="https://www.icicilombard.com/docs/default-source/assets/images/bima_bharosa.png"
                        alt="Bima Bharosa"
                    />
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="footer-right">
                <div className="dropdown">
                    <div
                        className="dropdown-header"
                        onClick={() => setOpen(!open)}
                    >
                        Group Companies
                        <span className={`arrow ${open ? "rotate" : ""}`}>^</span>
                    </div>

                    {open && (
                        <ul className="dropdown-list">
                            {companies.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BottomFooter;
