import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; 
// 👉 replace with Render backend URL after deployment

const AttendanceForm = () => {
  const [formData, setFormData] = useState({
    employee_id: "",
    date: "",
    status: "Present",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/attendance`, formData);
      alert(res.data.message);
      setFormData({ employee_id: "", date: "", status: "Present" });
    } catch (err) {
      alert(err.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

//   return (
//     <div className="mb-6">
//       <h2 className="text-xl font-semibold mb-2">Mark Attendance</h2>

//       <form onSubmit={handleSubmit} className="space-y-2">
//         <input
//           type="text"
//           name="employee_id"
//           placeholder="Employee ID"
//           value={formData.employee_id}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />

//         <select name="status" value={formData.status} onChange={handleChange}>
//           <option value="Present">Present</option>
//           <option value="Absent">Absent</option>
//         </select>

//         <button type="submit" disabled={loading}>
//           {loading ? "Saving..." : "Mark Attendance"}
//         </button>
//       </form>
//     </div>
//   );
         return (
  <div className="card">
    <h2>Mark Attendance</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employee_id"
        placeholder="Employee ID"
        value={formData.employee_id}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Mark Attendance"}
      </button>
    </form>
  </div>
);

};

export default AttendanceForm;
