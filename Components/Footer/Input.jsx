import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        // Email validation
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Login Successful ✅");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: "300px", color:"black" }}>
            <h2>Login</h2>

            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{color:"black"}}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ color: "black" }}
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
