const {MongoClient} = require("mongodb");

const _dbUrl = "mongodb://127.0.0.1:27017" ;
const _dbName = "node-lessons";

MongoClient.connect(_dbUrl)
    .then(result=>{
        const db = result.db(_dbName);

        db.collection("users").updateMany({
            name: "Eldar"
        },{
            $set: {
                name: "Elmar"
            }
        }).then(user=> console.log(user))

        db.collection("users").updateMany({
            name: "Elmar"
        },{
            $inc: {
                age:60
            }
        }).then(user=> console.log(user))
    })
    .catch(err => console.log("DATABASEYE BAQLANAMADI: ", err) )