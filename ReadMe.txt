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