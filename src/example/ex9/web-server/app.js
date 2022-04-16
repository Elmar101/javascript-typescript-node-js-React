const http = require("http");
const server = http.createServer((req , res)=>{
    console.log(` Request Url: ${req.url} \n Requset Metod: ${req.method} \n Request Headers: ${JSON.stringify(req.headers)} `);
    let writeResponse = "";
    if(req.url === "/"){
       writeResponse +="Home Site" 
    }
    if(req.url === "/user"){
        writeResponse +="User Site" 
     }
    res.write(writeResponse);
    res.end();
});

server.listen(8800);