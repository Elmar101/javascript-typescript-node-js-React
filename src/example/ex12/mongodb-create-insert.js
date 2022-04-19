/*/
    const mpngodb = require("mongodb");
    const MongoClient = mongodb.MongoClient;
/*/
const { MongoClient, ObjectId } = require("mongodb");

const databaseUrl = "mongodb://127.0.0.1:27017";

const databaseName = "node-lessons";

MongoClient.connect(databaseUrl , (error, result) => {
    if(error){
       return console.log("DATABASE -YE BAQLANMADI " + error);
    }
    console.log("DATABASE -YE BAQLANDI !!!");
    const db = result.db(databaseName);

    const objId = new ObjectId();
    console.log("ObjectId with string: " + objId.toHexString() +"\n");
    console.log("ObjectId id is: " + objId.id +"\n");
    const timeStamp = objId.getTimestamp();
    console.log("timeStamp is: " + timeStamp +"\n");

    db.collection("test").insertOne({
        _id: objId,
        name: "Elmar",
        updateId: objId
    }).then(result=> console.log((result))).catch(error=> console.log(error))
    /*/ 
    --------------------------------------------------------------------------------------------------------
    *CALLBACK ILE YAZLIMI
        
        db.collection("tableName").insertOne({proprty1: value1 ,property2: value2 ...}, (error ,result)=> {
            if(werror){ console.log(error)}
            else { console.log(result) }
        })

    --------------------------------------------------------------------------------------------------------

    *PROMISE ILE YAZLIMI 

        db.collection("tableName")
            .insertOne({proprty1: value1 ,property2: value2 ...})
            .then(result => { console.log(result) })
            .catch(error => console.log(error) );

    /*/
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

    db.collection("users").insertMany([
        {
            name: "Resad",
            age: 26
        },
        {
            name: "Elcin",
            age: 32
        }
    ]).then( result => console.log(result) )
      .catch(error => console.log(error) )
});