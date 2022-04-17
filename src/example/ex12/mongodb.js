/*/
    const mpngodb = require("mongodb");
    const MongoClient = mongodb.MongoClient;
/*/
const { MongoClient } = require("mongodb");

const databaseUrl = "mongodb://127.0.0.1:27017";

const databaseName = "node-lessons";

MongoClient.connect(databaseUrl , (error, result) => {
    if(error){
       return console.log("DATABASE -YE BAQLANMADI " + error);
    }
    console.log("DATABASE -YE BAQLANDI !!!");
    const db = result.db(databaseName);

    db.collection("users").insertOne({
        name: "Elmar",
        age: 26,
        isMail: true
    },(error, result)=>{
        if(error){
            console.log("USERS TABLESINE Melumat Elave edile Bimedi " + error);
        }
        else { 
            console.log(result);
        }
    });

    db.collection("users").insertOne({
        name: "Eldar",
        age: 26
    }).then(
        (result)=>{ console.log(result) }
    ).catch(error => { console.log(error) });
});