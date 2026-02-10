// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);

//   const fetchEmployees = async () => {
//     const res = await axios.get("https://hrmslite-cf0k.onrender.com/employees");
//     setEmployees(res.data);
//   };

//   const deleteEmployee = async (id) => {
//     await axios.delete(`https://hrmslite-cf0k.onrender.com/employees/${id}`);
//     fetchEmployees();
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

// //   return (
// //     <div>
// //       <h2 className="text-xl font-semibold mb-2">Employee List</h2>
// //       {employees.length === 0 ? (
// //         <p>No employees found.</p>
// //       ) : (
// //         <ul>
// //           {employees.map((e) => (
// //             <li key={e.employee_id}>
// //               {e.full_name} - {e.department} - {e.email}{" "}
// //               <button onClick={() => deleteEmployee(e.employee_id)}>Delete</button>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };
//      return (
//   <div className="card">
//     <h2>Employee List</h2>

//     {employees.length === 0 ? (
//       <p className="empty">No employees found.</p>
//     ) : (
//       <ul className="employee-list">
//         {employees.map((e) => (
//           <li key={e.employee_id} className="employee-item">
//             <span>
//               <strong>{e.full_name}</strong> — {e.department} — {e.email}
//             </span>
//             <button
//               className="btn-danger"
//               onClick={() => deleteEmployee(e.employee_id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );
// };
// export default EmployeeList;





import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = ({ onSelect }) => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await axios.get("https://hrmslite-cf0k.onrender.com/employees");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`https://hrmslite-cf0k.onrender.com/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="card">
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p className="empty">No employees found</p>
      ) : (
        <ul className="employee-list">
          {employees.map((e) => (
            <li key={e.employee_id} className="employee-item">
              {/* Clicking the employee triggers selection */}
              <span
                onClick={() => onSelect && onSelect(e.employee_id)}
                style={{ cursor: "pointer" }}
              >
                <strong>{e.full_name}</strong> — {e.department} — {e.email}
              </span>
              <button
                className="btn-danger"
                onClick={() => deleteEmployee(e.employee_id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
