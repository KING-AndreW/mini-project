import React from "react";
import "./ExpenseCard.css"


const ExpenseCard = (props : any) => {
    const data = props.data
    console.log(props);
    console.log(data);
  return (
    <>
      <div className="expense-card">
      <div>{data.desc}</div>
      <div>Amount : {data.amount}</div>
      </div>
    </>
  );
};

export default ExpenseCard;
