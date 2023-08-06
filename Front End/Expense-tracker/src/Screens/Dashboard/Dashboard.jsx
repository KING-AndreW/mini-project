import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Line, Bar } from "react-chartjs-2";
import { Chart as Chart } from "chart.js/auto";
import CardItem from "../../Components/CardItem/CardItem";

const Dashboard = () => {
  

  return (
    <>
      <Sidebar />
      <div className="main-area">
        <div className="main-heading">
          <h1>Dashboard</h1>
        </div>

        <div className="overview">
          <div className="chart-area">
            <Bar
              options={{ maintainAspectRatio: false }}
              datasetIdKey="id"
              data={{
                labels: ["Jun", "Jul", "Aug", "Sept", "Oct"],
                datasets: [
                  {
                    id: 1,
                    label: "",
                    data: [5, 6, 7, 30, 50],
                  },
                  {
                    id: 2,
                    label: "",
                    data: [3, 2, 1, 11, 10],
                  },
                ],
              }}
            />
          </div>
          <div className="overview-card">
            <CardItem amount={"5000"} text={"Budget"}/>
            <CardItem amount={"25000"} text={"Expended"}/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
