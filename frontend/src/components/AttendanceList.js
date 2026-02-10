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
