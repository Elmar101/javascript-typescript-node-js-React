const express = require("express");

const app = express();

app.listen(5000,()=>{
    console.log("Server Run");
});

function middlewareOne(req , res , next){
    console.log("MIDDLEWARE BIRDEYIM");
    next();
}

app.use(middlewareOne);

app.use((req , res , next)=>{
    console.log("MIDDLEWARE IKIDEYIM");
    //res.send("MIDDLEWARE IKI TAMAMLANDI!");
    req.time = new Date().getTime();
    next();
});

app.get("/",(req , res , next)=>{
    console.log("MIDDLEWARE UCHDEYIM");
    res.send("MIDDLEWARE UCH TAMAMLANDI! ZAMAN: " + req.time)
}); 

app.get("/users",(req , res , next)=>{
    console.log("MIDDLEWARE DORTDEYIM");
    res.send("MIDDLEWARE DORT TAMAMLANDI!")
});