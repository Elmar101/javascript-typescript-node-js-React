/* const myPromise = new Promise(
    (resolve: (data: Array<{id: number, name: string}>)=> void,reject: (error: string)=> void)=> {
    const data = [{id: 1 , name: "Elmar"}];
    if(data.length > 0 ){
        resolve(data);
    }reject("Data Tapilmadi !!!")
});

myPromise.then((response: Array<{id: number, name: string}>) => {
    console.log(response);
});
myPromise.catch((error: string)=> {
    console.log(error);
}) */

console.log("Start Program");

function getUser(id: number){
    console.log(id , " idli user");
    
    return new Promise(
        (resolve: (user: {id: number, name: string})=> void , reject: (err: string)=> void)=>{
        if(id){
            setTimeout(()=>{
                resolve({id: id, name: "Elmar"})
            },2000)  
        }else reject("Kodunuzda Hata Var!!!")
    })
}
function getCourses(username: string){
    return new Promise( (resolve: (courses: string[])=> void , reject: (err: string)=> void)=>{
        if(username){
            setTimeout(()=>{
                resolve(["JAVA","JAVASCRIPT", "TYPESCRIPT","RAECT JS"])
            },2000)
        }else reject(username + " adinda Kurs Tapilmadi")
    })
}

function getComents(coursename: string){
    return new Promise( (resolve: (coursename: string)=> void , reject: (err: string)=> void)=>{
        console.log(coursename , " kursun yorumlari getirilir");
        
        if(coursename){
            setTimeout(()=>{
                resolve(coursename + "Harika Couse")
            },2000)
        }else reject("HATA VAR")
    })
}

getUser(1)
    .then((userObj: {id: number, name: string})=>{ return getCourses(userObj.name);})
    .then( (courses: string[]) =>{ return getComents(courses[0]) })
    .then((coursename: string) => { console.log(coursename) })
    .catch((error: string)=>{ console.log(error) });
    
//promise.all
//const promiseAll = Promise.all([Promise.resolve("Yaz"), Promise.resolve("qaz")]).then(data=> console.log((data)))



//async await
(async ()=>{
    try{
        const userObj = await getUser(2);
        const courses = await getCourses(userObj.name);
        const comment = await getComents(courses[0]);
        console.log(comment);
    }catch(error){
        console.log(error);     
    }  
} )();

console.log("End Program");

