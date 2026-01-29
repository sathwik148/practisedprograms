import { Observable } from "rxjs";
// let user={
//     "name":"venu",
//     "email":"venu@gmail.com",
//     "phone":"9876543210"
// }


// let p =new Promise((resolve, reject) => {
//     resolve(user)
//     if(user){
//         resolve(user)
//     }else{
//         reject("user is undefined")
//     }
// })
// p.then(response=>{
//     console.log(response)
// } ).catch(error=>{
//     console.log(error)
// })


// let obj = new Observable((subscriber) => {
//     try{
//         if (user) {
//             subscriber.next(user)
//         }else{
//             subscriber.error("user is undefined")
//         }
//     }catch(error){
//         subscriber.error(error)
//     }
// finally{
//         subscriber.complete()
//     }

// })
// obj.subscribe({
//     next:res=>{
//         console.log(res);
//      },
//      error:error=>{
//         console.log(error);
//      },
//      complete:()=>{
//         console.log("completed");
//      }
// })   


// only for Response
// obj.subscribe((res)=>{
//     console.log(res);
// })


let obj=new Observable(subscriber => {
    let a=1
    let myinterval= setInterval(() => {
        subscriber.next("hello"+a++);  
    },1000)
    function unsubscribe(){
        clearInterval(myinterval)
    }
    return unsubscribe
})


let sub=obj.subscribe({
    next: res => {
        console.log(res);
    },
    
    error: err => {
        console.log(err);
    },
    complete: ()=>{
                 console.log("completed");
        }
})  


setTimeout(() => {
    sub.unsubscribe()
},5000)     
