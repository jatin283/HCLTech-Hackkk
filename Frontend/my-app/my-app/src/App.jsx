import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/login";
import Crcpage from "./Components/crcpage";
// import PIpage from "./Components/pipage";
import Participateform from "./Components/participantform";
import Health from "./Components/healthform";

function App() {
  // const [userRole, setUserRole] = useState("");

  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Login onLogin={setUserRole} />} />

    //       <Route path="/crcpage" element={<Crcpage role={userRole} />} />
    //       <Route path="/pipage" element={<PIpage role={userRole} />} />
    //       <Route path="/participantform" element={<Participateform />} />
    //       <Route path="/healthform" element={<Health />} />

    //       <Route path="/dashboard" element={userRole === "CrcPage" ? <Navigate to="/crcpage" /> : <Navigate to="/pipage" />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Health />
  );
}

export default App;
