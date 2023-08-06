import React from "react";
import "./SidebarElement.css";

const SidebarElement = (props) => {
    const name = props.name
    return (
    <>
      <div className="element">{name}   </div>
    </>
  );
};

export default SidebarElement;
