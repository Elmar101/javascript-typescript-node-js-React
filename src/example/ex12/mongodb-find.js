const {MongoClient , ObjectId} = require("mongodb");

const dbUrl = "mongodb://127.0.0.1:27017" ;
const dbName = "node-lessons"; 

MongoClient.connect(dbUrl).then( result=> {
    const db = result.db(dbName);
    
    /*/
    //Look At Db 
    db.collection("users")
      .find()
      .toArray()
      .then(result =>{ console.log(result) })
      .catch(error => {console.log(error);});
    /*/

    //Filter queu name
    db.collection("users").find({name: "Elmar"}).toArray().then( res => {
        console.log(res);
    })

    //Count 
    db.collection("users").find({name: "Elmar"}).toArray().then(res => console.log("count is : " , res.length) );
    //obtions count
    db.collection("users").find({name: "Elmar"} , {limit: 2 }).toArray().then(res => console.log("count is : " , res.length) )

    //use findOne
    db.collection("users").findOne({name: "Elmar"}).then( res=> console.log( "ilk uyqun gelen user : ", res));
    //object id ye gore useri getirek 
    db.collection("users").findOne({_id: new ObjectId("625c92fcb9612e364a483112") }).then(user => console.log("id ye gore user: " , user))
}).catch( error => console.log("DATABASEYE BAQLANAMADI !!! " + error));