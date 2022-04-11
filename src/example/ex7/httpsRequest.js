const https = require('https');

https.get("https://restcountries.com/v3.1/name/azerbaijan", (response)=>{
    let data = "";
    response.on("data",(chunk)=>{
        data = data + chunk;
    });

    response.on("end",()=>{
        const jsonData = JSON.parse(data);
        if(jsonData.length > 0){
            console.log(jsonData);
        }else {console.log("Data Tapilmadi !!!");}
    })
}).on("abort", (error)=>{
    console.log(error);
});