const fs = require('fs');
function addUser(name, phone){
    console.log("adı: ", name , "tel: ", phone)
    const readUsers = readUserFn();
    const unqueUsers = readUsers.filter(data => data.name === name);

    if(unqueUsers.length === 0){
        readUsers.push({
            name: name,
            phone: phone
        });
    }else { console.log(name," adinda istifadeci kayitli ")}
    
    writeUserToFile(readUsers);
}

function readUserFn(){
    try {
        const dataBuffer = fs.readFileSync('json/users.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

function writeUserToFile(file){
    const data = JSON.stringify(file);
    fs.writeFileSync("json/users.json",data)
}

function deleteUser(name){
    console.log("silinen istifadechinin adı: ", name);
    const readUsers = readUserFn();
    const users = readUsers.filter(data => data.name !== name );
    if(readUsers.length > users.length){
        console.log("Istifadechi Fayildan Silindi!!!");
        writeUserToFile(users)
    }else {
        console.log(name , " adli istifadechi tapilmadi.");
    }
}

function showUser(name){
    console.log("show a user: ",name);
    const readUsers = readUserFn();
    const showUser = readUsers.find(user=> user.name.toLowerCase() === name.toLowerCase() );
    if(showUser){
        console.log("Axtardiqiniz Istifadechi: ", showUser)
    }else {console.log("Bele bir Istifadeci Yoxdur!!!");}
}

function userLists(list){
    console.log(list);
    const readUsers = readUserFn();
    readUsers.forEach(element => {
        console.log("name: ", element.name , " phone: ", element.phone)
    });
}
module.exports = {
    addUser: addUser,
    deleteUser: deleteUser,
    showUser: showUser,
    userLists: userLists
}