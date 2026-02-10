# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from .models import Employee, Attendance
# from .crud import add_employee, get_all_employees, delete_employee, mark_attendance, get_attendance

# app = FastAPI(title="HRMS Lite API")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"]
# )

# # Employee APIs
# @app.post("/employees")
# def create_employee(emp: Employee):
#     result = add_employee(emp)
#     if not result:
#         raise HTTPException(status_code=400, detail="Employee ID already exists")
#     return {"message": "Employee added successfully", "employee": emp}

# @app.get("/employees")
# def list_employees():
#     return get_all_employees()

# @app.delete("/employees/{employee_id}")
# def remove_employee(employee_id: str):
#     deleted = delete_employee(employee_id)
#     if not deleted:
#         raise HTTPException(status_code=404, detail="Employee not found")
#     return {"message": "Employee deleted successfully"}

# # Attendance APIs
# @app.post("/attendance")
# def mark_attendance_api(att: Attendance):
#     if att.status not in ["Present", "Absent"]:
#         raise HTTPException(status_code=400, detail="Invalid status")
#     return {"message": "Attendance marked", "attendance": mark_attendance(att)}

# @app.get("/attendance/{employee_id}")
# def get_attendance_api(employee_id: str):
#     records = get_attendance(employee_id)
#     if not records:
#         return {"message": "No attendance records found"}
#     return records

# # Get attendance for all employees
# @app.get("/attendance")
# def get_all_attendance():
#     from .crud import attendance_collection  # or whatever your MongoDB collection is
#     all_records = list(attendance_collection.find({}, {"_id": 0}))
#     if not all_records:
#         return {"message": "No attendance records found"}
#     return all_records




from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .models import Employee, Attendance
from .crud import (
    add_employee,
    get_all_employees,
    delete_employee,
    mark_attendance,
    get_attendance,
    get_all_attendance
)

app = FastAPI(title="HRMS Lite API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Employee APIs
@app.post("/employees")
def create_employee(emp: Employee):
    result = add_employee(emp)
    if not result:
        raise HTTPException(status_code=400, detail="Employee ID already exists")
    return {"message": "Employee added successfully", "employee": emp}

@app.get("/employees")
def list_employees():
    return get_all_employees()

@app.delete("/employees/{employee_id}")
def remove_employee(employee_id: str):
    deleted = delete_employee(employee_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Employee not found")
    return {"message": "Employee deleted successfully"}

# Attendance APIs
@app.post("/attendance")
def mark_attendance_api(att: Attendance):
    if att.status not in ["Present", "Absent"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    return {"message": "Attendance marked", "attendance": mark_attendance(att)}

@app.get("/attendance/{employee_id}")
def get_attendance_api(employee_id: str):
    records = get_attendance(employee_id)
    if not records:
        return {"message": "No attendance records found"}
    return records

# NEW: Get all attendance records
@app.get("/attendance")
def get_all_attendance_api():
    records = get_all_attendance()
    if not records:
        return {"message": "No attendance records found"}
    return records
