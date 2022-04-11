type Promolve<ResT = void, RejT = Error> = {
    promise: Promise<ResT>;
    resolve: (value:ResT|PromiseLike<ResT>) => void;
    reject:(value:RejT) =>void
}; 

function makePromolve<ResT=void,RejT=any>():Promolve<ResT , RejT >{
    let resolve: (value:ResT| PromiseLike<ResT>)=>void = (value:ResT| PromiseLike<ResT>)=>{}
    let reject: (value:RejT)=>void = (value:RejT)=>{}
    const promise = new Promise<ResT>((res,rej) => {
        resolve = res;
        reject = rej;
      });
    return {promise , resolve , reject}
}

const p = makePromolve<number>();
let b  = true;
if(b){
    p.resolve(0);
    p.promise.then(value=>  console.log(value))
}

else{
    p.reject("Hata Var"); 
    p.promise.catch(error=> console.log(error))
}


