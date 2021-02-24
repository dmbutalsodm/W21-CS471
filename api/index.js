const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('db.db', err => {
	if (err) console.log(err);
	else console.log("Successfully hooked into database");
});

const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
var app = express()

app.options('*', cors())
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', function (req, res) {
	return db.all("SELECT username, password FROM employees", [], (err, rows) => {
		if (err) {
		  throw err;
		}
		let foundRow = rows.find((r) => r.username == req.body.username);
		if (!foundRow) return res.json({login: false});
		return res.json({login: foundRow.password == req.body.password})
	  });
})

app.listen(3001);
console.log("API Launched on port 3001");