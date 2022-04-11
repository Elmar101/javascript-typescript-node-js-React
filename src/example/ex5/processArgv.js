const yargs = require("yargs");
//console.log(process.argv);
const user = require("./user");
yargs.version("1.0.0");

//node ile komut elave etmek -> example => | node app.ts komutName --name="Elmar"| terminalda yaziriq
//yargs ile commut elave etmek  ts fayillarinda |npm i yargs @types/yargs | js de types yuklenmir!!!
yargs.command({
    command: 'add',
    describe: 'add a user to box',
    builder:{
        name: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        },
        phone: {
            describe: 'user phone',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        user.addUser(argv.name, argv.phone);
    }
})

yargs.command({
    command: 'delete',
    describe: 'delete a user from box',
    builder:{
        name: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        user.deleteUser(argv.name)
    }
})

yargs.command({
    command: 'show',
    describe: 'show a user',
    builder:{
        name: {
            describe: 'user name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       user.showUser(argv.name)
    }
})

yargs.command({
    command: 'lists',
    describe: 'list of users',
    handler(argv){
        user.userLists("istifadechi listesi");
    }
})
//console.log(yargs.argv);
yargs.parse();
