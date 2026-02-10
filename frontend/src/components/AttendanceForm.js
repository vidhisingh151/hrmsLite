import React, { useState } from "react";
import axios from "axios";

const AttendanceForm = ({ fetchAttendance }) => {
  const [employeeId, setEmployeeId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employeeId || !date || !status) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://hrmslite-cf0k.onrender.com/attendance",
        {
          employee_id: employeeId,
          date: date,
          status: status,
        }
      );
      setMessage(res.data.message);
      setEmployeeId("");
      setDate("");
      setStatus("Present");

      // Refresh attendance list after marking
      if (fetchAttendance) fetchAttendance(employeeId);
    } catch (err) {
      console.error(err);
      setMessage("Error marking attendance");
    }
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="EMP001"
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AttendanceForm;
