import React, { Component } from "react";
import "./employee-card-styles.css";
export const EmployeeCard = props => (
  <div className="employee-card-container">
    <img
      alt="Employee"
      src={`https://robohash.org/${props.employee.id}?set=set1&size=180x180`}
    />
    <h2>{props.employee.name}</h2>
    <p>{props.employee.email}</p>
  </div>
);
