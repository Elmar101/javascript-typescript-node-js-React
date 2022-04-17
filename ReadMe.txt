==================================Birinci=======================================================================================
1 ci Bir Folder Yaratdiq lessons
2 tsc --init => typescript config json fayıkını yaratmaq üçün (tsconfig.json)
3 tsconfig.json bu fayla daxil olub => "target": "es6" | "rootDir": "./src" | "moduleResolution": "node" |  "outDir": "./dist"
4 src folderini yaratdiriq ve ora .ts uzantisi ile fayil elave etdik app.ts
5 tsc => Bu comut src de olan .ts uzantili faylin js formasini dist folderinde yaradir
6 lessons dizininde "npm init -y" etdik package.json fayilini Yaratdiq
7 npm install express  => rest apiler Üçün 
8 npm install -D typescript => typescripti Projectimize Elave edirik
9 npm install ts-node nodemon @types/node @types/express
10 @types/node @types/express bunlar Custom Express ve Node Tiplerini Endirmekdi
11 package.json fayilinda script objesinde biz Özimizin scriptlərini yaza bilərik biz dev adinda script yazdiq
12  "dev": "nodemon src/example/ex1/globalAndModule.ts" və => npm run dev deyerek nodemon ile proyecti Çalışdırdıq!!!S
13* sonra her ex folderi Üçün siz gedib bu dev comutunu ayarlamalisiz 
================================================================================================================================

========================================================| MongoDB |=============================================================
1 => https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows => Bu Sayita Gedib Endirme işlərini edirik

2 => C:\Program Files\MongoDB\Server\5.0\bin => Bu folderin Yolunu Komputerimizde path olaraq Əlavə Edirik 
     Bunun üçün biz kamputerimize Sağ Klik edirik (This PC) "Properties" Bölmini Seçirik ordanda "Advanced System Seting" Bölminiseçirik
     Və "Enviroment Variables" sa klik edirik orda "system variables da olan Path" alanina iki defe klikleyirik ondan sonrada "New"
     seçmini seçerek "C:\Program Files\MongoDB\Server\5.0\bin" Bu yolu Əlavə edirik -Sizde Baxin Program File sine MongoDb Hara Elave edilib
     Onu ilkin olara siz install edende seçirsiz next next etdikde özi C:\Program Files\MongoDB adinda elave edir siz novbeti versialari 
     endirdikde C:\Program Files\MongoDB bura gedib ordanda bin folderine daxil olub o yolu select edib yazdiqlarimi edin 
     Yuklerken size teklif Edilen "MongoDB Compas" bu hisseni secin Elave olunsun Komputerinize Bu "CMD" Qara pencerelerde edilen 
     işi Vie terefde edirik
     "Elave Etdikden Sonra Komputerinize Restart Verin"

3 => Komputerinizdə "Services" Die axtarin ve ora daxil olun "MongoDB Server Running" Bele bir sey yazilmalidi
4 => "cmd"   bura daxil olun ve orada "mongod" yazin mongodb arxa planda bash veren ishleri gorsedir 
5 => "cmd"  "cls" commutu ile çıxın bu defede qara ekrana "mongo" yazin 
6 => "cmd"  "show dbs" - Bu komutu yazmaqla Hansi databaseler var onu gorursiniz
7 => "cmd"  "use test" - test databasesine daxil olun demekdir
8 => "cmd"  "db" - deyerek hansi databasede olduquvuzu gorirsiniz   =>    "db. ikidefe TAB-a basin"
9 => "cmd"  " db.createCollection("userOne") " -TABLE YARADIRIQ
10 => "cmd" "show collections" - Databazalarinda olan Tableleri getirir
11 => "cmd" "db.userOne.insertOne({name: "Eldar", age: "26"})" insert işləmi => Eger Bir istifadeci Elave edirsizse Object yazib daxilinde
      objectin property ve valuelerini yazirsiz => db.userOne.insertOne({name: "Eldar", age: "26"}) 
      !!!UNUTMAYIN HER NOQTEDEN SONRA IKI DEFE TAB EDEREK MongoDB-DAKI Komutlari goreceksizniz noqteden sonra ne yaza bilersiz
12 => "cmd" "db.userOne.insertOne([{name: "Eldar", age: "26"}, {name: "Elmar" , age: 26}])" => Çoxlu İstifadeçi Elave Etmek
13 => "cmd" "db.userOne.find({ ŞƏRT - PROPERTY VƏ VALUE ŞƏKLİNDƏ })"v - ex => db.userOne.find({name: "Elmar"})
14 => for(i=1; i<200; i++) db.userOne.insertOne({name: "Edik" , age: i})
15 => dbx.userOne.find() - eger tablede istifadeci choxsa "it" yazaraq digerlerinide cmd de gore bilersen
16 => GOOGLE DAXIL OLUB => mongodb gui free yazib size lazim olani yukleyin (men => Robot 3t ni yukledim)