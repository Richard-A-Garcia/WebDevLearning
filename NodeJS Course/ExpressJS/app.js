const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log('In the middleware');
    next(); //have to call this to have access to the next middleware piece. we either call next or we send a response
});
app.use((req,res,next) => {
    console.log('In another middleware');
    res.send(); //this is an express method that allows us to send a response
})

const server = http.createServer(app);

server.listen(3000);