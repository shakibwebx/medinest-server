# 💊 MediNest – Medicine E-Commerce (Server)

**Live API:** [https://medinest-server-two.vercel.app/](https://medinest-server-two.vercel.app/)

This is the **backend API** for the MediNest Medicine E-Commerce application. Built using **Node.js**, **Express.js**, and **MongoDB**, it powers product management, cart operations, user authentication, and more.

---

## 🧪 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** Firebase Auth
- **CORS & Middleware:** Express Middleware, Helmet, Morgan
- **Deployment:** Vercel

---

## ✨ Features

✅ RESTful API for products, users, and cart  
✅ Secure Firebase Authentication integration  
✅ MongoDB database using Mongoose models  
✅ CORS and error-handling middleware  
✅ Environment variable-based configuration  
✅ Hosted API ready to consume from frontend  

---

## 🛠 API Endpoints

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/products`           | Get all medicines            |
| GET    | `/products/:id`       | Get a single medicine by ID  |
| POST   | `/products`           | Add new medicine (admin)     |
| PATCH  | `/products/:id`       | Update medicine (admin)      |
| DELETE | `/products/:id`       | Delete medicine (admin)      |
| POST   | `/users`              | Register or login user       |
| GET    | `/users`              | Get all users (admin only)   |
| PATCH  | `/users/:id`          | Update user role/profile     |

> 🔐 Protected routes require valid Firebase Auth tokens.

---

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shakibwebx/medicine-ecommerce-server.git
