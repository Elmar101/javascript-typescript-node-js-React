const path = require("path");
const fs = require("fs");

console.log("==============================================================");

console.log("PATH: ",path);

console.log("==============================================================");

console.log("FS: ",path);

console.log("==============================================================");

console.log("BASENAME: ",path.basename('a/b/c'));

console.log("==============================================================");

console.log("FILENAME: ",__filename);

console.log("==============================================================");

console.log("DIRNAME: ",__dirname);

console.log("==============================================================");
console.log(path.dirname(__filename));

console.log("==============================================================");
//parse ishlemleri

const pathParseOBJ = path.parse(__dirname);
console.log("parsePathOBJ",pathParseOBJ);

console.log("==============================================================");
//fs reader
fs.readdir('./',{withFileTypes: false},(error: any , files: any)=>{
    console.log(files);
});

