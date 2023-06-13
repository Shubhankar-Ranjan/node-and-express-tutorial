const express = require('express');
const app = express()

// app.get         GET - Read Data
// app.post        POST - Insert Data
// app.put         PUT - Update Data
// app.delete      DELETE - Delete Data
// app.all
// app.use
// app.listen

app.get('/',(req,res) =>{
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about',(req,res) => {
    res.status(200).send('About Page')
})

app.all('*',(req,res) => {
    res.status(404).send("<h1>resource not found</h1>")
})

app.listen(5000, () =>{
    console.log('server is listening on port 5000...')
})