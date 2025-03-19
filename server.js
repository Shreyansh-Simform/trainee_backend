const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParser.json());



// MySQL connection
const db = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: ", err);
        return;
    }
    console.log("Connected to MySQL Database!");
});


// CRUD Routes

//Fetch
app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

//Post
app.post('/employees', (req, res) => {
    const { name, age, department, salary } = req.body;
    db.query('INSERT INTO employees (name, age, department, salary) VALUES (?, ?, ?,?)', 
    [name, age, department, salary], 
    (err, result) => {
        if (err) throw err;
        res.send({ message: 'Employee added', id: result.insertId });
    });
});

//PUT
app.put('/employees/:id', (req, res) => {
    const { name, age, department, salary } = req.body;
    db.query('UPDATE employees SET name=?, age=?, department=?, salary=? WHERE id=?', 
    [name, age, department, salary, req.params.id], 
    (err) => {
        if (err) throw err;
        res.send({ message: 'Employee updated' });
    });
});

//DELETE
app.delete('/employees/:id', (req, res) => {
    db.query('DELETE FROM employees WHERE id=?', [req.params.id], (err) => {
        if (err) throw err;
        res.send({ message: 'Employee deleted' });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
