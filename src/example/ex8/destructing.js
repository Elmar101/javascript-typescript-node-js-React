let arr = [1 , "elmar", "amanov" , 26];
const [, ad, , age] = arr;
console.log(` name: ${ad}  age: ${age}`);

console.log("************************************************************");

const teacher = {};

[,teacher.name , teacher.surname] = arr;
console.log(`teacher is ${JSON.stringify(teacher)}`);

console.log("************************************************************");

let [id , ...info] = arr;
console.log(`info is : ${info}`);


console.log("************************************************************");

let [s1 = 'default deyer' , s2]= [ , arr];
console.log(`s1 = ${s1} s2 = ${s2}`);

console.log("************************************************************");
let [nId , nName = 'bilinmir', , nAge]= [...arr];
console.log(`nId = ${nId} nName = ${nName} nAge = ${nAge}`);

console.log("*************************|OBJECT|***********************************");
const obj = {
    title: 'JAVA',
    description: "JAVA IS BACKEND LANGUAGE",
    use: 250000
}

const {title ,description , use} = obj;
console.log(` title = ${title};  \n description = ${description}; \n use = ${use}`);

console.log("*******************************************************************");
const {title:titleDefault="JAVASCRIPT" , ...otherObj} = obj;
console.log(` titleDefault = ${titleDefault};  \n otherObj=${JSON.stringify(otherObj)}`);

console.log("*******************************************************************");
const n = 23;
const m = 21;
const obj2 = {n , m}
console.log(` obj2 = ${JSON.stringify(obj2)}`);
console.log("*******************************************************************");

const user = {
    id: 1,
    fullname: {
        firstname: "Elmar",
        lastname: "Amanov"
    },
    favoriteColor: ['red','blue']
}
//1 fulname -i deyisen kimi goturmek 
const {fullname} = user;

console.log("FULLNAME IS ", fullname);

//2 firstname and lastname -i deyisen kimi goturmek
const {fullname:{firstname , lastname}} = user;
console.log("FULLNAME IS ", fullname, " FIRSTANME IS: ", firstname,  "LASTNAME IS: ", lastname);
const params = {
    name: "Eldar",
    sname: "Amanov"
}
showUser(params);
function showUser({name: ad = "Elmar", sname = "Amanov"}){
    console.log("name is ", ad , " sname is " , sname);
}