const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

console.log("server side code up")

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'userLogin',
})

app.post('/create', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query('INSERT INTO usercredentials(username, password) VALUES(?,?)',
    [username, password], 
    (err, result) => {
        if (err) {
            console.log(err);
            console.log(result);
        } else {
            res.send(console.log("values inserted"))
        }
    })
})


app.listen(3001, ()=> {
    console.log("server is up/running on port 3001")
})