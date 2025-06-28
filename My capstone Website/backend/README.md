# 🌐 Elemental AIM – Backend API

This is the backend service for the **Elemental AIM** platform — team-led final year project focused on supporting education through user registration, communication, and questions. Built with **Node.js**, **Express**, and **MySQL**, this backend handles authentication, contact form submissions, and user inquiries.

---

## 📦 Folder Structure

```
Code/
├── routes/
│   ├── auth.js
│   ├── contact.js
│   └── question.js
├── .env
├── db.js
├── server.js
├── package.json
├── package-lock.json
├── Queries.sql
└── README.md

```

---

## ⚙️ Setup Instructions

### 1. Clone or Download the Project

```bash
git clone https://github.com/Awkward-turtleness/ElementalAim.git
cd ElementalAim/backend/code

```

### 2. Install Dependencies

Make sure you have **Node.js v18+** and **MySQL** installed.

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root with the following content:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=****   # (Replace with your local MySQL password)
DB_NAME=elemental
```

> ❗️ You can submit `.env` with `****` in the password field for security.

---

## 🧠 Database Setup

### Option 1: Manual Setup in MySQL Workbench

Run these commands:

```sql
CREATE DATABASE elemental;

USE elemental;

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  occupation VARCHAR(50),
  password VARCHAR(255)
);

CREATE TABLE login_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100),
  login_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  subject VARCHAR(255),
  message TEXT,
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_email VARCHAR(100),
  subject VARCHAR(255),
  question TEXT,
  asked_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Option 2: MySQL CLI Setup (via Terminal / CMD)

```bash
mysql -u root -p
USE elemental;
```

Then run each `CREATE TABLE` statement above.

---

## 🚀 Running the Server

```bash
# Basic way to run the server
node server.js
```

### 🔁 Optional: Enable Auto-Reload with nodemon

`nodemon` watches your files and automatically restarts the server when changes are made — ideal for development.

#### Option 1 – Global Installation

```bash
npm install -g nodemon
nodemon server.js
```

#### Option 2 – Use Local Dev Script

Install `nodemon` as a dev dependency and use the provided script:

```bash
npm install --save-dev nodemon
npm run dev
```

Make sure your `package.json` includes the following:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```


Visit [http://localhost:5000](http://localhost:5000) to see the live API landing page.

---
## 🧾 Project Metadata

| Field        | Value          |
|--------------|----------------|
| **Name**     | backend-new     |
| **Version**  | 1.0.0           |
| **Entry**    | server.js       |
| **Node.js**  | Requires >= v18 |
| **License**  | ISC             |

---

## 📦 Dependencies

| Package         | Version  |
|----------------|----------|
| express         | ^5.1.0   |
| mysql2          | ^3.14.1  |
| bcrypt          | ^6.0.0   |
| dotenv          | ^16.5.0  |
| cors            | ^2.8.5   |
| console.table   | ^0.10.0  |

---

## 📮 API Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| POST   | `/api/auth/signup` | Register a new user       |
| POST   | `/api/auth/login`  | Log in an existing user   |
| POST   | `/api/contact`     | Submit contact form       |
| POST   | `/api/question`    | Submit a question         |

---


## 🔐 API Endpoints

### ✅ `/api/auth` – Authentication

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| POST   | /auth/signup   | Register new users  |
| POST   | /auth/login    | Authenticate users  |

#### Example – Signup
```json
{
  "fullName": "Alice Smith",
  "email": "alice@example.com",
  "occupation": "Student",
  "password": "securePassword123"
}
```

#### Example – Login
```json
{
  "email": "alice@example.com",
  "password": "securePassword123"
}
```

---

### 📩 `/api/contact` – Contact Messages

| Method | Endpoint     | Description                |
|--------|--------------|----------------------------|
| POST   | /contact     | Submit a contact message   |

#### Example
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Help",
  "message": "I'd like more info about the platform."
}
```

---

### ❓ `/api/question` – User Questions

| Method | Endpoint     | Description                     |
|--------|--------------|---------------------------------|
| POST   | /question    | Submit a user question          |

#### Example
```json
{
  "email": "john@example.com",
  "subject": "Tracking donations",
  "question": "How do I know where my money goes?"
}
```

---

## 📝 Sample Queries (Queries.sql)

```sql
-- Sign Up Users
SELECT full_name AS "Full Name", email AS "Email", occupation AS "Occupation" FROM user;

-- Login Users (recent)
SELECT * FROM login_users ORDER BY login_time DESC;

-- Contact Messages
SELECT name AS "Name", email AS "Email", subject AS "Subject", message AS "Message", submitted_at AS "Submitted At"
FROM contact_messages ORDER BY submitted_at DESC;

-- Questions
SELECT user_email AS "Email", subject AS "Subject", question AS "Question", asked_at AS "Asked At"
FROM questions ORDER BY asked_at DESC;
```

---

## 🛠️ Troubleshooting & Common Issues

### 🔧 Node.js & Environment Setup

- Make sure you're using **Node.js v18+**.
- Check your version:

  ```bash
  node -v
  ```

- Update npm if necessary:

  ```bash
  npm install -g npm
  ```

### ⚠️ `bcrypt` Installation Issues

If you're on **Windows, ARM processors**, or get native compilation errors while installing `bcrypt`, use the fallback package:

```bash
npm uninstall bcrypt
npm install bcryptjs
```

Then update your code:

```js
// Before:
const bcrypt = require('bcrypt');

// After:
const bcrypt = require('bcryptjs');
```

### 🧠 MySQL Connection Errors

- Ensure MySQL is running locally.
- Verify your `.env` file has the correct DB credentials.
- Test MySQL CLI connection:

  ```bash
  mysql -u root -p
  ```

### 🐢 Slow Install or Memory Errors

- If installation freezes or crashes, it may be due to low system RAM.
- Solutions:
  - Close other apps
  - Use `--legacy-peer-deps` (for npm)
  - Consider Docker for consistent environments

---

## 🙋 About

This project was developed by Imantha Karunarathna as part of the final submission for the Elemental AIM platform backend. It demonstrates Express-based REST APIs, MySQL data handling, and dynamic frontend feedback.

---

© 2025 Imantha Karunarathna and team – All rights reserved. Elemental AIM Project.

---

