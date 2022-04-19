const {MongoClient} = require("mongodb");

const _dbUrl = "mongodb://127.0.0.1:27017" ;
const _dbName = "node-lessons";

MongoClient.connect(_dbUrl)
    .then(result=>{
        const db = result.db(_dbName);

        db.collection("users").deleteMany({
            name: "Elmar"
        }).then(res=> console.log(res))
        
    })
    .catch(err => console.log("DATABASEYE BAQLANAMADI: ", err) )