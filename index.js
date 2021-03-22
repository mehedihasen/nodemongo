const express = require('express')
var app = express()
const users =["hasid", "Rakib", "Kudds", 'almin', 'saide', 'Khalied']

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})

app.listen(3000, ()=> console.log("Listening to port 3000"))