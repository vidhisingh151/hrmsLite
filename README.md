# HRMS Lite

A lightweight Human Resource Management System (HRMS Lite) built with **React (frontend)**, **FastAPI (backend)**, and **MongoDB**.  
This system allows an admin to manage employees and track daily attendance.

---

## 🔗 Live Application

- **Frontend (Netlify):** [https://capable-axolotl-249b04.netlify.app/](https://capable-axolotl-249b04.netlify.app/)  
- **Backend (Render):** [https://hrmslite-cf0k.onrender.com](https://hrmslite-cf0k.onrender.com)

---

## 🛠 Tech Stack

- **Frontend:** React, Axios, HTML, CSS  
- **Backend:** FastAPI, Python, Pydantic  
- **Database:** MongoDB (Atlas)  
- **Deployment:** Netlify (frontend), Render (backend)

---

## 📁 Project Structure

hrmsLite/
│
├─ frontend/ # React app
│ ├─ src/
│ ├─ public/
│ └─ package.json
│
├─ backend/ # FastAPI backend
│ ├─ app/
│ │ ├─ main.py
│ │ ├─ crud.py
│ │ ├─ models.py
│ │ └─ database.py
│ └─ requirements.txt
│
└─ README.md


---

## ⚡ Features

1. **Employee Management**
   - Add a new employee
   - View all employees
   - Delete an employee

2. **Attendance Management**
   - Mark attendance (Present / Absent) for employees
   - View attendance for a specific employee
   - View all attendance records

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo

```bash
git clone https://github.com/vidhisingh151/hrmsLite.git
cd hrmsLite
```

2. Backend Setup (FastAPI + MongoDB)
```bash
cd backend
# Create a virtual environment
python -m venv venv
# Activate venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

```
Set environment variable for MongoDB

Create a .env file or set environment variable:

MONGO_URI = "your-mongodb-atlas-connection-string"

Run backend locally

uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

Test the API at:

http://localhost:8000/docs

3. Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```
The app will run at http://localhost:3000

Make sure the backend URL in your Axios calls points to your local backend or deployed Render URL.

Build for production:
```bash
npm run build
```
4. Deployment

Backend: Deployed on Render 

Frontend: Deployed on Netlify 

📌 Notes / Assumptions

Single admin system (no authentication implemented)

Only essential HR features are included (Employee + Attendance)

MongoDB Atlas is used for persistence

CORS is enabled in backend to allow frontend access

📝 Commands Summary

Backend
```bash
cd backend
python -m venv venv
# activate venv
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Frontend
```bash
cd frontend
npm install
npm start        # for development
npm run build    # for production
```

🏆 Bonus Features

View all attendance records in one table

Clean UI with responsive design

Real-time updates on marking attendance




