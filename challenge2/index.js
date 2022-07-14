const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
var pool = mysql.createPool({
    connectionLimit : 5,
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    multipleStatements: true
})

var sql = "CREATE TABLE IF NOT EXISTS people (id int auto_increment, name varchar(255), primary key (id));"
pool.query(sql)

app.get('/', (req, res) => {

    sql = "INSERT INTO people(name) VALUES ('Aleph');"
    sql += "SELECT * FROM people;"

    pool.query(sql, function (err, result) {
        if (err) throw err
        var html = '<h1>Full Cycle</h1>'
        html += '<ul>'
        result[1].forEach(people => {
            html += '<li>' + people.name + '</li>'
        })
        html += '</ul>'
        res.send(html)
    });
})

app.listen(port, () => {
    console.log('Running on port ' + port)
})