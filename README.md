# 🚀 Node.js Course – Learning Journey

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=fff&style=for-the-badge)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=fff&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?logo=mongodb&logoColor=fff&style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-000?logo=jsonwebtokens&logoColor=fff&style=for-the-badge)

Welcome to my **Node.js learning repo** 🎯  
This repository documents my journey of learning Node.js step by step, from the basics of creating servers to implementing secure authentication systems.

---

## Topics I Covered

### Core Node.js

- Building a server with the built‑in `http` module
- Using the **fs module** (`fsPromises`) for file handling
- Working with the **path** module
- Understanding and using **EventEmitter**
- Creating and listening to custom events (e.g., `logEvents`)

### Express.js

- Setting up an **Express** server
- Routing with `router.get()`, `.post()`, `.delete()`, `.route()`
- Serving static files
- **Middleware** (built‑in, third‑party, and custom)
- Error‑handling middleware

### Authentication & Authorization

- **bcrypt** for password hashing & verification
- **jsonwebtoken (JWT)** for authentication
  - Issuing **access** and **refresh** tokens
  - `verifyJWT` middleware for protected routes
- **Role‑Based Access Control (RBAC)** authorization

### Database

- Connecting Node.js with **MongoDB** (Mongoose)
- Environment‑based connection config
- Basic CRUD patterns (create, read, update, delete)

### Tooling & Utilities

- **dotenv** for environment variables
- API testing with **Thunder Client / Postman**
- **nodemon** for hot‑reloading
- Debugging common issues (401 Unauthorized, bcrypt/jwt errors)

---

## Getting Started

1. **Clone & Install**

```bash
git clone https://github.com/your-username/nodejs-course.git
cd nodejs-course
npm install
```

2. **Create `.env`**

```env
PORT=5000
ACCESS_TOKEN_SECRET=youraccesstokensecret
REFRESH_TOKEN_SECRET=yourrefreshtokensecret
MONGO_URI=your_mongo_connection_string
```

3. **Run the server**

```bash
npm run dev
# or
node server.js
```

---

## Highlights

- Built a working **REST API** with protected routes
- Implemented **JWT authentication** & **RBAC authorization**
- Practiced **middleware** patterns and **error handling**
- Explored **file system**, **events**, and core Node.js modules
- Connected to **MongoDB** for persistence

---

## Author

## **Anas Sabir**
