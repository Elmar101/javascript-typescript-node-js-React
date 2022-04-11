const variable: { name: string, nameFn: (name: string)=> void } = require('./variable');
 
console.log("===============================================================");

console.log("Variable Module Object is: ",variable);

console.log("===============================================================");

console.log("name is : ",variable.name);

console.log("================================================================");

variable.nameFn(variable.name);