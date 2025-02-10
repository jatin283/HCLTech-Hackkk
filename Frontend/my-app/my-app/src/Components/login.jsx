import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
function Login(){
    const [role, setRole] = useState('CRC');
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin(role);
        if (role === "CrcPage") {
            navigate("/crcpage");
        } else {
            navigate("/pipage");
        }
    };

    return (
        <div>
            <p className="starting">Welcome to Clinical Trials</p>
            <h2 className="heading">
                Login Page
            </h2>
            <input className="inpp" placeholder="Email/Phone Number" /><br />
            <input className="inpp" placeholder="Username" /><br />
            <input className="inpp" placeholder="Password" /><br />
            <input 
                className="inpp" 
                placeholder="Role" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
            /><br />
            <button className="button" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;