# Customer CRM - Fresh Project

## Setup
1. In pgAdmin, create database `customer_db` if it does not already exist. Select it, open Query Tool, and run `database.sql`.
2. Copy `backend/.env.example` to `backend/.env`, then set `DB_PASSWORD` to your PostgreSQL password.
3. From the project root terminal run `npm install` and `npm --prefix backend install`.
4. Terminal 1: `npm run server`. Test `http://localhost:5000/api/db-test`.
5. Terminal 2: `npm run dev`. Open the URL Vite prints, normally `http://localhost:5173`.

API: `GET /api/customers`, `POST /api/customers`, `GET /api/db-test` on port 5000.
