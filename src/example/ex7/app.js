const yargs = require("yargs");
const findCountryWeather = require("./axiosRequest");

callApi();
function callApi(){
    yargs.command({
        command: 'get',
        describe: 'add a country name at english language',
        builder:{
            countryName: {
                describe: 'country name',
                demandOption: true,
                type: 'string'
            },
        },
        handler(argv){
            findCountryWeather(argv.countryName);
        }
    });
    
    yargs.parse();
}

module.exports = callApi;

