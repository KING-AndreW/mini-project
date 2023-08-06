import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar show={showSidebar} />

      <div>Here's the dashboard</div>
      
    </>
  );
};

export default Dashboard;
