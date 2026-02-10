import React, { useState, useEffect } from "react";
import axios from "axios";

const AllAttendanceList = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAllAttendance = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://hrmslite-cf0k.onrender.com/attendance");
      setAttendance(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch attendance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllAttendance();
  }, []);

  if (loading) return <p>Loading attendance...</p>;
  if (error) return <p>{error}</p>;
  if (attendance.length === 0) return <p>No attendance records found</p>;

  return (
    <div className="card">
      <h2>All Attendance Records</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((att, index) => (
            <tr key={index}>
              <td>{att.employee_id}</td>
              <td>{att.date.split("T")[0]}</td>
              <td>{att.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAttendanceList;
