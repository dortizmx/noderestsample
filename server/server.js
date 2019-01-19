require("./config/config");
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.jsonp('Hello World');
});

app.get('/usuario', (req, res)=>{
    res.jsonp({
        _id : "12345678",
        key : "12345678",
        name : "Prueba"
    });
});

app.post('/usuario', (req, res)=>{
    let body = req.body;
    if (body.name === undefined){
        res.status(400).jsonp({error : 400, data : "El nombre es necesario"});
    }
    else {
        res.status(201).jsonp({error : 201, data : body});
    }
    
});

app.put('/usuario/:id', (req, res)=>{
    let id = req.params.id; 
    res.jsonp({
        _id : "12345678",
        key : "12345678",
        name : "Prueba",
        id 
    });
});

app.delete('/usuario', (req, res)=>{
    res.jsonp({
        _id : "12345678",
        key : "12345678",
        name : "Prueba"
    });
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${ process.env.PORT }`);
});