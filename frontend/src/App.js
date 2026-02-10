import React, { useState } from "react";
import "./styles.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import AllAttendanceList from "./components/AllAttendanceList";


function App() {
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const handleEmployeeSelect = (employeeId) => {
    setSelectedEmployee(employeeId);
  };

  return (
    <div className="container">
      <h1>HRMS Lite</h1>

      {/* Employee form */}
      <EmployeeForm />

      {/* Employee list*/}
      <EmployeeList onSelect={handleEmployeeSelect} />

      {/* Attendance form*/}
      <AttendanceForm employeeId={selectedEmployee} />

      {/* Attendance list*/}
      <AttendanceList employeeId={selectedEmployee} />

      <AllAttendanceList />

    </div>
  );
}

export default App;



