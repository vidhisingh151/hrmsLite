import React from "react";
import "./styles.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";

function App() {
  return (
    // <div className="container mx-auto p-4">
        <div className="container">

      {/* <h1 className="text-2xl font-bold mb-4">HRMS Lite</h1> */}
            <h1>HRMS Lite</h1>

      <EmployeeForm />
      <EmployeeList />
      <AttendanceForm />
      <AttendanceList />
    </div>
  );
}

export default App;
