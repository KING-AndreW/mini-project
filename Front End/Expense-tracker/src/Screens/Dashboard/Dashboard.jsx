import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar />
      <div className="main-area">

      <div className="main-heading">
        <h1>Dashboard</h1>
      </div>

      </div>
    </>
  );
};

export default Dashboard;
