import React, { Component } from "react";
import "./App.css";
import { EmployeeList } from "./components/employee-list/employee-list";
import { SearchBox } from "./components/search-box/search-box.component";
import { tsNamespaceExportDeclaration } from "@babel/types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ employees: users }));
  }
  render() {
    const { employees, searchField } = this.state;
    const filteredEmployees = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="emp-title">Employees</h1>
        <SearchBox
          placeholder="Search Employees"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <EmployeeList employees={filteredEmployees} />
      </div>
    );
  }
}

export default App;
