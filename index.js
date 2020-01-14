const express = require('express');

const app = express();
const port = process.env.PORT || 3333;

app.use(express.static('public'));

app.get('/test',(req,res)=>{
    res.send("This is a test message!")
});


const server = app.listen(port,()=>{
    console.log(`Server running on port: ${port}...`)
});