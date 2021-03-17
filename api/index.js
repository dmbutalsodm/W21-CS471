console.log(process.cwd())
const sqlite3 = require('sqlite3').verbose();
const Merchandise = require('./item-classes.js');
const Part        = require('./item-classes.js');
const Motorcycle  = require('./item-classes.js');

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

app.get('/merchandise', function (req, res) 
{
	return db.all("SELECT * FROM merchandise", [], (err, rows) => 
	{
		if(err) 
		{
		  throw err;
		}
		
		let arr = [];
		
		for(let i = 0; i < rows.length; i++)
		{
			var merchandise = new Merchandise(rows[i].id, rows[i].name, rows[i].description, rows[i].quantity, rows[i].price);
			arr.push(JSON.stringify(merchandise));
		}
		
		return res.json(JSON.stringify(arr));
    });
})

app.get('/parts', function (req, res) 
{
	return db.all("SELECT * FROM parts", [], (err, rows) => 
	{
		if(err) 
		{
		  throw err;
		}
		
		let arr = [];
		
		for(let i = 0; i < rows.length; i++)
		{
			var part = new Part(rows[i].id, rows[i].name, rows[i].description, rows[i].quantity, rows[i].location);
			arr.push(JSON.stringify(part));
		}
		
		return res.json(JSON.stringify(arr));
    });
})


app.get('/motorcycles', function (req, res) 
{
	return db.all("SELECT * FROM motorcycles", [], (err, rows) => 
	{
		if(err) 
		{
		  throw err;
		}
		
		let arr = [];
		
		for(let i = 0; i < rows.length; i++)
		{
			var motorcycle = new Motorcycle(rows[i].id, rows[i].name, rows[i].description, rows[i].quantity, rows[i].price, rows[i].make, rows[i].model, rows[i].year);
			arr.push(JSON.stringify(motorcycle));
		}
		
		return res.json(JSON.stringify(arr));
    });
})

app.listen(3001);
console.log("API Launched on port 3001");