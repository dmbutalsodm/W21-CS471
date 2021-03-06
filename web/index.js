const express = require('express')
const app = express()
const path = require('path') 


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/webpages/landing.html'));
})

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + '/webpages/landing.html'));
})

app.get('/splash', function (req, res) {
  res.sendFile(path.join(__dirname + '/webpages/splash.html'));
})
 
app.listen(80)
console.log("Website Launched on port 80");