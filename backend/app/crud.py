from .database import employees, attendance

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
    attendance.insert_one(att.dict())
    return att

def get_attendance(employee_id):
    return list(attendance.find({"employee_id": employee_id}, {"_id": 0}))
