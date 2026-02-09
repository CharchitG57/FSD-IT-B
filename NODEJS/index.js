// const http = require('http');

// const myserver = http.createServer((req, res) => {

//   if (req.url === '/') {
//     res.end(`
//       <h1>Welcome to Home Page</h1>
//       <p>Welcome to ABES Engineering College</p>
//       <img src="https://avatars.githubusercontent.com/u/48626910?s=280&v=4" width="300" />
//     `);
//   }

//   else if (req.url === '/about') {
//     res.end("We are students of ABES");
//   }

//   else if (req.url === '/contact') {
//     res.end("848393839");
//   }

//   else if (req.url === '/class') {
//     res.end("IT A");
//   }

//   else {
//     res.end("404 Page Not Found");
//   }

// });

// myserver.listen(8000, () => {
//   console.log('Server is running on port 8000');
// });

// const fs=require('fs');
// fs.writeFileSync("./it-a.txt","We are Student of IT")
// fs.writeFileSync("./abes.txt","We are student of ABES")
// const result=fs.readFileSync("./it-a.txt","utf-8");
// console.log(result);
const fs=require('fs');
fs.writeFile("./ad.text","code is very good time pass");
