const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title><head>');
        res.write('<body><h1>Hello from your Node App!</h1></body>');
        res.write('<form action="/create-user" method="POST" ><input class="input" type="text" name = "Username" placeholder="Username"> <button type="submit" id="btn">Submit</button></form>')
        res.write('</html>');
        return res.end();
    }
    if (url === "/users") {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title><head>');
        res.write('<body><h1>Here are the dummy users</h1>');
        res.write('<ul><li>Bobby</li><li>Richard</li><li>Luke</li><li>Mark</li></ul></body>');
        res.write('</html>');
        return res.end()
    }
    if (url === "/create-user" && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {

            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);

        })
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end()
    }
    res.end();
});
server.listen(3000);
