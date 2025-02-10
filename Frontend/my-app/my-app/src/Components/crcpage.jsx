import React, { useState } from "react";
import './crcpage.css'
function Crcpage(){
    // const [operation, setOperation] = useState("1");
    return (
        <div>
            <h1 className="starting">Welcome to CRC Page</h1>
            <button className="button">Add a Patient</button><br />
            <button className="button">Add Health Data</button><br />
            <button className="button">Schedule Visit</button>
        </div>
    );
}

export default Crcpage;