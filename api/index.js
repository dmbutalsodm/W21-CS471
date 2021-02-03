const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
 
app.get('/', function (req, res) {
  res.json({hello: 'from the API'});
})
 
app.listen(3001);
console.log("API Launched on port 3001");