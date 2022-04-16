const axios = require("axios");

const findCountryWeather = (country) => {
  axios
    .get("https://restcountries.com/v3.1/name/"+country+"")
    .then((response) => {
      //console.log(response.data);
      const country = response.data[0];
      const capital = country.capital;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=7e36bf359f287db40a1a8a91c1a55d4b&lang=az&units=metric`
        )
        .then((res) => {
          //console.log(res);
          console.log(`
            Paytaxt sheherde: ${res.data.name} 
            Bu gun Hava: ${res.data.weather[0].description} 
            istilik: ${res.data.main.temp}
        `);
        });
    })
    .catch((error) => console.log(error));
};
module.exports = findCountryWeather;