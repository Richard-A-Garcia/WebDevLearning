const http = require('http');
const express = require('express');
const app = express();
//const rp = require('request-promise');
//const url = 'https://google.com';

var request = require('request');

var headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

var dataString = 'USER=10899018&PASSWORD=Met@1inBD123k';

var options = {
    url: 'https://sit.mss.metlife.com/siteminderagent/forms/login-ldap.fcc?SMAGENTNAME=-SM-ClkjBWtTEHr4WaJSwW%2bPx1G53zjTptt5O9xhbudsPGu4XZDezIZR70rM4tnUhbRj&TARGET=-SM-https%3a%2f%2fsit%2emss%2emetlife%2ecom%2f',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

// app.use((req,res) => {
//     console.log('Request Received');
//     console.dir(req.headers);
// });
// app.listen(3000,()=>{
//     console.log('Listening on port 3000');
// });
// app.use('/users',(req,res,next) => {
//     console.log('In the users page');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"></form>'); //this is an express method that allows us to send a response
// })
// app.use('/',(req,res,next) => {
//     console.log('In the main page');
//     res.send('<h1> This is the main page</h1>'); //this is an express method that allows us to send a response
// })


//const server = express.cre;

//server.listen(3000);