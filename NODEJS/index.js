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
//const fs=require('fs');
// fs.writeFile("./ad.txt","code is very good time pass",()=>{

// });
// fs.readFile("./ad.txt","utf-8",(err,res)=>{
// if(err){
//     console.log("Error",err)
// }
// else{
//     console.log(res);
// }
// });
// fs.appendFileSync("./ad.txt",`and i am happy`)
// fs.writeFile("./a1.txt","Hello I am a Student",()=>{});
// fs.cpSync("./a1.txt","b1.txt")

// fs.unlinkSync("./ad.txt")

// const fs=require('fs').promises
// // fs.writeFile('b1.txt',"Hello World",(err,res)=>{

// // })

// // Using Promises
// async function ReadFile(){
//     try{
//        const data=await fs.readFile('a1.txt','utf-8')
//        console.log(data);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// async function appendFile(){
//     try{
//         const data=await fs.appendFile('a1.txt','\n My branch is IT');
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// async function main(){
// ReadFile();
// appendFile();
// ReadFile();
// }
// main();

// const fs=require('fs/promises');
// async function read(file){
//     try{
//         const data= await fs.readFile(file,'utf-8')
//         const jsondata=JSON.parse(data);
//         console.log(jsondata.name);
//     }
//     catch(err){
//         console.log("Unable to read file",err);
//     }
// }
// read('./data.json')

// const customerData = {
//   name: "Updated Co.",
//   order_count: 5,
//   address: "Another Address"
// };

// async function write(filepath,data){
//   try{
//       const jsonString=JSON.stringify(data,null,2);
//        await fs.writeFile(filepath,jsonString,'utf-8');
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// write('./data.json',customerData);

// Udating json

// const fs=require('fs/promises')

// async function updatefile(filePath){
//     try{
//         const data= await fs.readFile(filePath,'utf-8');
//         const JsonOBJ=JSON.parse(data);
//         JsonOBJ.order_cont+=1;
//         const updated=JSON.stringify(JsonOBJ,null,2);
      
//       await fs.writeFile(filePath,updated,'utf-8')
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// updatefile('./data.json');

const os=require('os');
console.log("platform",os.platform());
console.log("Userinfo",os.userInfo());
console.log("CPU",os.arch());
console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());
console.log("Uptime",os.uptime());
console.log("home dir",os.homedir());
console.log("Host name",os.hostname());