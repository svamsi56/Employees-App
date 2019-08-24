import React, { Component } from "react";
import "./employee-list.styles.css";
import { EmployeeCard } from "../employee-card/employee-card";
export const EmployeeList = props => (
  <div className="employee-list">
    {props.employees.map(employee => (
      <EmployeeCard key={employee.id} employee={employee} />
    ))}
  </div>
);
