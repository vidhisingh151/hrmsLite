// import React, { useState } from "react";
// import axios from "axios";

// const API_BASE_URL = "http://localhost:8000"; 
// // 👉 replace with Render backend URL after deployment

// const AttendanceList = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchAttendance = async () => {
//     if (!employeeId) return;

//     setLoading(true);
//     setError("");
//     setRecords([]);

//     try {
//       const res = await axios.get(
//         `${API_BASE_URL}/attendance/${employeeId}`
//       );

//       if (res.data.message) {
//         setError(res.data.message);
//       } else {
//         setRecords(res.data);
//       }
//     } catch (err) {
//       setError("Failed to fetch attendance records");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="mb-6">
//       <h2 className="text-xl font-semibold mb-2">Attendance Records</h2>

//       <div className="mb-3">
//         <input
//           type="text"
//           placeholder="Enter Employee ID"
//           value={employeeId}
//           onChange={(e) => setEmployeeId(e.target.value)}
//         />
//         <button onClick={fetchAttendance}>View</button>
//       </div>

//       {loading && <p>Loading attendance...</p>}

//       {error && <p>{error}</p>}

//       {!loading && records.length > 0 && (
//         <table border="1" cellPadding="8">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {records.map((rec, index) => (
//               <tr key={index}>
//                 <td>{rec.date}</td>
//                 <td>{rec.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AttendanceList;



import React, { useState, useEffect } from "react";
import axios from "axios";

const AttendanceList = ({ employeeId }) => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAttendance = async () => {
    if (!employeeId) return;

    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://hrmslite-cf0k.onrender.com/attendance/${employeeId}`
      );
      setAttendance(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch attendance");
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  fetchAttendance();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [employeeId]);

  if (!employeeId) return <p>Please select an employee</p>;
  if (loading) return <p>Loading attendance...</p>;
  if (error) return <p>{error}</p>;
  if (attendance.length === 0) return <p>No attendance records found</p>;

  return (
    <div>
      <h2>Attendance for {employeeId}</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((att, index) => (
            <tr key={index}>
              {/* Show date as YYYY-MM-DD */}
              <td>{att.date.split("T")[0]}</td>
              <td>{att.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
