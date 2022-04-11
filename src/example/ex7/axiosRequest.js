const axios = require('axios');

axios.get("https://restcountries.com/v3.1/name/azerbaijan")
     .then((response)=>{
        console.log(response.data);
     })
     .catch(error => console.log(error))