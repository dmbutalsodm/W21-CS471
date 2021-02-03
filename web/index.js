const express = require('express')
const app = express()
const path = require('path') 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/webpages/landing.html'));
})
 
app.listen(3000)
console.log("Website Launched on port 3000");