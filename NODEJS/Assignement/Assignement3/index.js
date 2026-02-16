const http = require('http');
const fs = require('fs');
const path = require('path');

const myserver = http.createServer((req, res) => {

    // ✅ REMOVE query parameters
    const cleanUrl = req.url.split('?')[0];

    let filePath = '.' + cleanUrl;

    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = path.extname(filePath);

    let contentType = 'text/html';

    if (extname === '.js') contentType = 'text/javascript';
    if (extname === '.css') contentType = 'text/css';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

myserver.listen(8000, () => {
    console.log('Server running on port 8000');
});
