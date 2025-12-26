import { useState } from "react";
import policyData from './Login.json'

function RenewPolicy() {
    const [searchType, setSearchType] = useState("policy");
    const [searchValue, setSearchValue] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = () => {
        let result = "";

        if (searchType === "policy") {
            result = policyData.find(
                p => p.policyNumber === searchValue
            );
        } else {
            result = policyData.find(
                p => p.phone === searchValue
            );
        }

        if (result) {
            setUserData(result);
            setError("");
        } else {
            setUserData(null);
            setError("❌ No record found");
        }
    };

    return (
        <div style={{ width: "400px" }}>
            <h3>Renew Policy</h3>

            {/* Dropdown */}
            <select
                value={searchType}
                onChange={(e) => {
                    setSearchType(e.target.value);
                    setSearchValue("");
                    setUserData(null);
                    setError("");
                }}
            >
                <option value="policy">Policy Number</option>
                <option value="phone">Phone Number</option>
            </select>

            {/* Input */}
            <input
                type="text"
                placeholder={
                    searchType === "policy"
                        ? "Enter Policy Number"
                        : "Enter Phone Number"
                }
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                style={{color:"black"}}
            />

            <button onClick={handleSearch}>Proceed</button>

            {/* Error */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* User Data */}
            {userData && (
                <div>
                    <h4>User Details</h4>
                    <p><b>Name:</b> {userData.name}</p>
                    <p><b>Policy:</b> {userData.policyNumber}</p>
                    <p><b>Phone:</b> {userData.phone}</p>
                    <p><b>Plan:</b> {userData.plan}</p>
                </div>
            )}
        </div>
    );
}

export default RenewPolicy;
