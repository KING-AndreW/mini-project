import React from "react";
import "./CardItem.css";

const CardItem = (props) => {
  const amount = props.amount;
  const text = props.text;

  return (
    <>
      <div className="dashboard-card">
        <h1 className="card-amount">{amount}</h1>
        <h3 className="card-text">{text}</h3>
      </div>
    </>
  );
};

export default CardItem;
