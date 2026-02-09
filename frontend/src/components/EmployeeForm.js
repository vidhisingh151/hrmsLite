import React, { useState } from "react";
import axios from "axios";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/employees", employee);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.detail);
    }
  };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4">
//       <h2 className="text-xl font-semibold mb-2">Add Employee</h2>
//       <input placeholder="ID" name="employee_id" onChange={handleChange} required />
//       <input placeholder="Full Name" name="full_name" onChange={handleChange} required />
//       <input placeholder="Email" name="email" type="email" onChange={handleChange} required />
//       <input placeholder="Department" name="department" onChange={handleChange} required />
//       <button type="submit">Add</button>
//     </form>
//   );


     return (
  <div className="card">
    <h2>Add Employee</h2>

    <form onSubmit={handleSubmit}>
      <input placeholder="Employee ID" name="employee_id" onChange={handleChange} required />
      <input placeholder="Full Name" name="full_name" onChange={handleChange} required />
      <input placeholder="Email" name="email" type="email" onChange={handleChange} required />
      <input placeholder="Department" name="department" onChange={handleChange} required />
      <button type="submit">Add Employee</button>
    </form>
  </div>
);

};

export default EmployeeForm;
