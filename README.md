# Customer CRM

A full-stack Customer Relationship Management (CRM) application built using React, Vite, Node.js, Express.js, and PostgreSQL.

## Features

- Customer management interface
- REST API using Node.js and Express.js
- PostgreSQL database integration
- React-based frontend
- Local setup instructions for developers

## Technologies Used

- Frontend: React, Vite, JavaScript
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Version Control: Git and GitHub

## Prerequisites

Install the following software before running the project:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)

## 1. Download the Project

Open a terminal and run:

```bash
git clone https://github.com/rajeevsingh3880-web/customer-crm.git
cd customer-crm
```

## 2. Install Dependencies

Install the frontend dependencies:

```bash
npm install
```

Install the backend dependencies:

```bash
cd backend
npm install
cd ..
```

## 3. Set Up PostgreSQL

1. Open pgAdmin and connect to your local PostgreSQL server.
2. Create a database named `customer_db`.
3. Open the Query Tool for `customer_db`.
4. Run the SQL commands in the project's `database.sql` file to create the customers table.

## 4. Configure Environment Variables

Inside the `backend` folder, copy `.env.example` to a new file named `.env`.

Update `backend/.env` with your own PostgreSQL credentials:

```dotenv
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_own_postgresql_password
DB_NAME=customer_db
PORT=5000
```

Replace `your_own_postgresql_password` with your local PostgreSQL password.

**Security:** Never upload your actual `.env` file or database password to GitHub.

## 5. Run the Backend

From the project's root folder, run:

```bash
npm run server
```

The backend should run at:

`http://localhost:5000`

## 6. Run the Frontend

Open a second terminal in the project root and run:

```bash
npm run dev
```

Open the local URL displayed by Vite, usually:

`http://localhost:5173`

Keep both terminals running while using the application.

## 7. Test the Database Connection

Open this URL in your browser:

`http://localhost:5000/api/db-test`

A successful response confirms that the backend can connect to PostgreSQL.

## Project Structure

```text
customer-crm/
├── backend/
│   ├── config/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── src/
├── database.sql
├── index.html
├── package.json
└── README.md
```

## Author

**Golu Patel**

## License

No license has been specified yet. Contact the repository owner before reusing this project beyond what GitHub's default terms permit.
