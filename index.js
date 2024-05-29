const express = require('express');
const mysql = require('mysql2'); // para ligar ao mysql
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    hots: 'localhost',
    user: 'root',
    password: '',
    database: 'turma1p2023',
    port: 3306 // por defeito ! é 3306
});

connection.connect((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Connected to the database');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});