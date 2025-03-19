#Employee Database Application (Node + MYSQL) 
A Node.js based Web application using a MYSQL database.It serves as the backend for the Employee Database Management System.

**Features**
- GET,PUT,POST, and DELETE endpoints.
- MySQL database integration.
- RESTful API design.

**Requirements**
Node - 22.14.0
Npm - 11.2.0
MySQL - 8.X.X

## **Setup Instructions**

1. Clone the repository

```bash
git clone https://github.com/Shreyansh-Simform/trainee_backend.git
cd trainee_backend

2. Install Dependencies

npm init -y
npm install express mysql2 body-parser cors dotenv

4. MySQL Setup

Connect to MySQL and create the database:

Create your database and user.

Create a table "employees"  with 5 fields :-

id - set as not null primary key and auto_increment
name
age
department 
salary

You can now use the API to interact with the database!

5. Set the credentials in .env file :-

mv .env.template .env
Edit credentials.

6. Start the Node server

node server.js

The backend will be available at:
http://localhost:3001


