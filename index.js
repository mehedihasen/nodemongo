const express = require('express')
var app = express()
app.get('/', (req, res) => res.send("wellcome to nodemongo") )

app.listen(3000, ()=> console.log("Listening to port 3000"))