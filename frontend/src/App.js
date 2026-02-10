// import React from "react";
// import "./styles.css";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeList from "./components/EmployeeList";
// import AttendanceForm from "./components/AttendanceForm";
// import AttendanceList from "./components/AttendanceList";

// function App() {
//   return (
//     // <div className="container mx-auto p-4">
//         <div className="container">

//       {/* <h1 className="text-2xl font-bold mb-4">HRMS Lite</h1> */}
//             <h1>HRMS Lite</h1>

//       <EmployeeForm />
//       <EmployeeList />
//       <AttendanceForm />
//       <AttendanceList />
//     </div>
//   );
// }

// export default App;








import React, { useState } from "react";
import "./styles.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import AllAttendanceList from "./components/AllAttendanceList";


function App() {
  // State to keep track of selected employee
  const [selectedEmployee, setSelectedEmployee] = useState("");

  // Function to update the selected employee
  const handleEmployeeSelect = (employeeId) => {
    setSelectedEmployee(employeeId);
  };

  return (
    <div className="container">
      <h1>HRMS Lite</h1>

      {/* Employee form */}
      <EmployeeForm />

      {/* Employee list: we can pass the handler to select employee */}
      <EmployeeList onSelect={handleEmployeeSelect} />

      {/* Attendance form: pass selected employee and refresh function */}
      <AttendanceForm employeeId={selectedEmployee} />

      {/* Attendance list: show attendance for selected employee */}
      <AttendanceList employeeId={selectedEmployee} />
      
      <AllAttendanceList />

    </div>
  );
}

export default App;



// import React, { useState } from "react";
// import "./styles.css";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeList from "./components/EmployeeList";
// import AttendanceForm from "./components/AttendanceForm";
// import AttendanceList from "./components/AttendanceList";

// function App() {
//   // State to keep track of selected employee
//   const [selectedEmployee, setSelectedEmployee] = useState("");

//   // Function to update the selected employee
//   const handleEmployeeSelect = (employeeId) => {
//     setSelectedEmployee(employeeId);
//   };

//   return (
//     <div className="container">
//       <h1>HRMS Lite</h1>

//       {/* Employee form */}
//       <EmployeeForm />

//       {/* Employee list: pass the handler to select employee */}
//       <EmployeeList onSelect={handleEmployeeSelect} />

//       {/* Attendance form: pass selected employee */}
//       <AttendanceForm employeeId={selectedEmployee} />

//       {/* Attendance list: supports view all toggle */}
//       <AttendanceList employeeId={selectedEmployee} />
//     </div>
//   );
// }

// export default App;
