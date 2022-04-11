console.log("Start Program");
console.log("=========================================");

getUser(1, showUser);

function getUser(id: number, callback: (user: {id: number , name: string})=> void){
    console.log(id , " idli User Getirilir");
    console.log("=========================================");
    setTimeout(()=>{
        callback({id: id, name: "Elmar"});
        console.log("=========================================");
    },1000);
}

function showUser(user: {id: number , name: string}){
    getCourse(user.name,(arr: string[])=>{
        getComments(arr[0],(comment: string)=>{
            console.log(comment);
        })
    } )
    console.log(JSON.stringify(user));
    console.log("=========================================");
    
}

function getCourse(username: string, callback: (courses: string[])=> void){
    console.log(username, " adli istifadechinin kursklari getirilir");
    console.log("=========================================");
    setTimeout(()=>{
        callback(["JAVASCRIPT","TYPESCRIPT","JAVA"])
    },2000);
}

function showComments(comment: string){
    console.log(comment);
}

function getComments(coursesname: string, callback: (comments: string)=>void){
    console.log(coursesname, " adli kursun Yorumlari getirilir");
    console.log("=========================================");
    setTimeout(()=>{
        callback("Gozel Bir Cours");
    },2000);
}
console.log("Program Bittdi");