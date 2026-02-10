# from .database import employees, attendance

# # Employee CRUD
# def add_employee(emp):
#     if employees.find_one({"employee_id": emp.employee_id}):
#         return None
#     employees.insert_one(emp.dict())
#     return emp

# def get_all_employees():
#     return list(employees.find({}, {"_id": 0}))

# def delete_employee(employee_id):
#     result = employees.delete_one({"employee_id": employee_id})
#     return result.deleted_count

# # Attendance CRUD
# def mark_attendance(att):
#     attendance.insert_one(att.dict())
#     return att

# def get_attendance(employee_id):
#     return list(attendance.find({"employee_id": employee_id}, {"_id": 0}))




# from .database import employees, attendance
# from datetime import datetime

# # -------------------------
# # Employee CRUD
# # -------------------------
# def add_employee(emp):
#     if employees.find_one({"employee_id": emp.employee_id}):
#         return None
#     employees.insert_one(emp.dict())
#     return emp

# def get_all_employees():
#     return list(employees.find({}, {"_id": 0}))

# def delete_employee(employee_id):
#     result = employees.delete_one({"employee_id": employee_id})
#     return result.deleted_count

# # -------------------------
# # Attendance CRUD
# # -------------------------
# def mark_attendance(att):
#     data = att.dict()

#     # Convert date to datetime for MongoDB
#     data["date"] = datetime.combine(data["date"], datetime.min.time())

#     attendance.insert_one(data)
#     return data  # return dictionary instead of Pydantic model

# def get_attendance(employee_id):
#     return list(attendance.find({"employee_id": employee_id}, {"_id": 0}))




from .database import employees, attendance
from datetime import datetime, date

# Employee CRUD
def add_employee(emp):
    if employees.find_one({"employee_id": emp.employee_id}):
        return None
    employees.insert_one(emp.dict())
    return emp

def get_all_employees():
    return list(employees.find({}, {"_id": 0}))

def delete_employee(employee_id):
    result = employees.delete_one({"employee_id": employee_id})
    return result.deleted_count

# Attendance CRUD
def mark_attendance(att):
    data = att.dict()
    
    # Convert date to datetime
    if isinstance(data["date"], str):
        data["date"] = datetime.strptime(data["date"], "%Y-%m-%d")
    elif isinstance(data["date"], date):
        data["date"] = datetime.combine(data["date"], datetime.min.time())
    else:
        raise ValueError("Invalid date type")

    attendance.insert_one(data)

    # Return a clean dict (without _id)
    return {
        "employee_id": data["employee_id"],
        "date": data["date"],
        "status": data["status"]
    }

def get_attendance(employee_id):
    return list(attendance.find({"employee_id": employee_id}, {"_id": 0}))
