# 🚀 StudyMate – Django + React (Vite) Full-Stack App

A modern **full-stack study management platform** built using  
**Django REST Framework (Backend)** and **React + Vite (Frontend)** with JWT authentication and a clean, responsive UI.

---

## ✨ Features

### 🔐 Authentication
- User Signup & Login
- JWT-based authentication (SimpleJWT)
- Protected routes (frontend & backend)
- Secure user profile endpoint

### 🎨 Frontend (React + Vite)
- Landing Page with Hero Section
- Responsive Navbar
- Signup & Login Pages
- Protected User Dashboard
- Tailwind CSS based modern UI
- Fully responsive (mobile → desktop)

### ⚙️ Backend (Django + DRF)
- REST APIs for authentication
- SQLite database (easy dev setup)
- Django Admin Panel
- Modular apps (`users`, `study`)
- CORS enabled for frontend integration

---

## 🧠 Tech Stack

### Frontend
- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔐 React Router
- 🌐 Axios

### Backend
- 🐍 Django
- 🧩 Django REST Framework
- 🔑 SimpleJWT
- 🗄️ SQLite (default)

---

## 📁 Project Structure
```bash
DjangoReactViteApp/
│
├── backend/
│ ├── core/
│ │ ├── settings.py
│ │ ├── urls.py
│ │ └── wsgi.py
│ │
│ ├── users/
│ │ ├── serializers.py
│ │ ├── views.py
│ │ ├── urls.py
│ │ └── models.py
│ │
│ ├── study/
│ ├── manage.py
│ ├── db.sqlite3
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ │ └── axios.js
│ │ ├── auth/
│ │ │ └── ProtectedRoute.jsx
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ └── Hero.jsx
│ │ ├── pages/
│ │ │ ├── Landing.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ └── Dashboard.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
│
├── .gitignore
└── README.md
```

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abhishek-DS-ML-Gupta/DjangoReactViteApp.git
cd DjangoReactViteApp
```
## 🐍 Backend Setup (Django)
### Create Virtual Environment
```bash
python -m venv django
django\Scripts\activate   # Windows
```
### Install Dependencies
```bash
pip install -r backend/requirements.txt
```
### Run Migrations
```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```
### Run Server
```bash
python manage.py runserver
```
### 📍 Backend runs at:
```bash
http://127.0.0.1:8000
```

## ⚛️ Frontend Setup (React + Vite)
### Install Dependencies
```bash
cd frontend
npm install
```
### Run Frontend
```bash
npm run dev
```
### 📍 Frontend runs at:
```bash
http://localhost:5173
```

## 🔗 API Endpoints
### Authentication
```bash
Method	Endpoint	Description
POST	/auth/signup/	Create new user
POST	/auth/login/	Login & get JWT
GET	/auth/me/	Get logged-in user
```

## 🔐 JWT Authentication Flow
User signs up → stored in SQLite

User logs in → receives access token

Token stored in localStorage

Axios attaches token to every request

Protected routes validate token

## 🧪 Testing
### Backend
Test APIs using Postman or curl

### Django Admin available at:

```bash
http://127.0.0.1:8000/admin/
Frontend
```
## Signup → Login → Dashboard flow

### Route protection tested via logout

🚧 Current Status
✅ Authentication working
✅ Frontend & backend connected
✅ Responsive UI
🚧 Advanced dashboard analytics (future)
