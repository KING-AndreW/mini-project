import React, { useState } from "react";
import "./Sidebar.css";
import SidebarElement from "../Sidebar-element/SidebarElement";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={`sidebar ${toggle ? "active" : "inactive"}`}>
        <div className="heading">
          <div className="top-name">Company</div>
          <button onClick={()=>{setToggle(!toggle)}} className="toggle">X</button>
        </div>

        <div className="sidebar-elements">
          <SidebarElement name={"Home"} />
          <SidebarElement name={"Account"} />
          <SidebarElement name={"Summary"} />
          <SidebarElement name={"Log Out"}/>
          <SidebarElement name={"Delete My Data"} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
