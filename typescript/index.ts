// let a: number= 34;
// console.log(a);

// let b: boolean= true;
// console.log(b);

// let c: string= "Hello, TypeScript!";
// console.log(c);

// let d:undefined= undefined
// console.log(d);

// let e:null= null
// console.log(e);

// let a:[number, boolean, string]= [1, true, "Hello"];
// console.log(a);
// let user: { name: string; age: number } = { name: "Alice", age: 30 };
// console.log(user);
// let user: { name: string; age: number; phone: number } = { 
//     "name": "sathwik", 
//     "age": 21,
//     "phone":9392073857
//  };
//     console.log(user);
//     console.log(user.name);

// let user2:{[index: string]: string }={}
//     user2.name= "sathwik"
//     user2.age= "21"
//     user2.phone= "9392073857"
//     console.log(user2);
// let user3: Record<string, string> = {};
// user3.name = "sathwik";
// user3.age = "21";
// user3.phone = "9392073857";
// console.log(user3);
// enum CartStatus {
//     CART = "CART",
//     CHECKOUT = "CHECKOUT",
//     PAYMENT = "PAYMENT",
//     COMPLETE = "COMPLETE"
// }

// console.log(CartStatus);
// console.log(CartStatus.CART);

/////////////////////function arguments and return type
// function sathwik(a:number | string , b:number=3, ...c:number[]){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// sathwik("sunny", 5, 1, 2, 3)


// function sathwik(a:number | string , b:number=3, ...c:number[]): string{
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return "Function executed";
// }
// let a=sathwik("sunny", 5, 1, 2, 3)
// console.log(a);

// let sathwik = (a:number | string , b:number=3, ...c:number[]): string=>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return "Function executed";
// }
// let b=sathwik("sunny", 5, 1, 2, 3)
// console.log(b);


//////////class 
// class User {
//     a:number=34
//     b:number=45

//     add():number{
//         let c=this.a+this.b
//         return c
//     }
//      sub():number{
//         let c=this.a-this.b
//         return c
//     }
//     display(a:number,b:number =34,...c:number[]):string{
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         return "hello";

//     }
// }

///let d= new Demo()

// class Demo{
//     name!:string;

//     setName(name:string){
//         this.name=name
//     }

//     getName(){
//         console.log(this.name);
//         return this.name
        
//     }
// }
// let d= new Demo()
// d.setName("sathwik")
// d.getName()


// let fullName: string = "sathwik"
// function sathwik(){
//     let a: number = 45
// }

// class Demo{
//     c:number=22
//     readonly d:string="hello"

//     raj(){
//         let b: number = 33
//         const f: number = 34
//         function sunny()
//         {
            
//         }


//     }
// }

// interface User{
//     id:number;
//     name:string;
//     email:string;
//     phone:string;
//     age:number;
    
// }

// abstract class Human{
//     abstract name:string;
//     email :string="sathwik@gmail.com"
//     abstract phone:string;
//     abstract display():void;
//     display2():void{

//     }
   
// }

// class Person {
//     name:string="sathwik"
//     email:string="sathwik@gmail.com"
//     phone:string="9392073857"
//     display():void{
//         console.log("i am from display");
//     }
//     constructor(){
//         console.log("i am from constructor");
//     } 
        
// }

// class Demo implements User{
//     name:string="sathwik"
//     email:string="sathwik@gmail.com"
//     phone:string="9392073857"
//     display():void{
//         console.log("i am from display");
//     }
// }
// let d= new Demo()
// console.log(d.name);
// console.log(d.email);
// console.log(d.phone);
// d.display();


// let user:User={
//     name:"sathwik",
//     email:"sathwik@gmail.com",
//     phone:"9392073857",
//     display:function():void{
//         console.log("i am from display");
//     }
// }
// console.log(user.name);
// console.log(user.email.toLowerCase());
// console.log(user.phone?.toUpperCase());

// user.display()

// class Demo{
//     name:string="sathwik"
//     email:string="sathwik@gmail.com"
//     display(){
//         console.log("i am from display from demo class");
//     }
// }

// class Test extends Demo{
//     phone:string="9392073857"
//     gender:string="male"
//     display(){
//         console.log("i am from display from test class");
//     }
// }
// let t= new Test()


// array list we do is map , filter, forEach, every, some and find,findlast, findIndex, findLastIndex, includes,indexof
// let user1: User ={ "id": 1, "name": "sathwik", "email": "sathwik@gmail.com", "phone": "9392073857", "age": 21 }
// let user2: User = { "id": 2, "name": "sunny", "email": "sunny@gmail.com", "phone": "9392073858", "age": 26 }
// let user3: User = { "id": 3, "name": "bujji", "email": "bujji@gmail.com", "phone": "9392073859", "age": 23 }
// let user4: User = { "id": 4, "name": "sathwik2", "email": "sathwik3@gmail.com", "phone": "9392073860", "age": 18 }
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// let users: User[] = [user1, user2, user3, user4]

// users.forEach(user => {
//     console.log(user);
// });
    

// let modifiedUsers : User[] = users.map(user => {
//     user.name = user.name + "gvs"
//     return user
// })

// let modifiedUsers : User[] = users.map(user => {
//     if(user.age > 22){
//         user.name = user.name + "22"
//     }
//     return user
// })

// console.log(modifiedUsers);


// let juniorUsers : User[] = users.filter(user => user.age < 22)
// console.log(juniorUsers);

// let seniorUsers : User[] = users.filter(user => user.age > 22)
// console.log(seniorUsers);

// another Way 
// let seniorUsers: User[] = users.filter(user =>{
//     if(user.age > 22){
//         return user
//     }
// })
// console.log(seniorUsers);

// this condition should satisfies by all then it will return true otherwise false
// let isAllmajor = users.every(user => user.age >= 18)
// console.log(isAllmajor);

//to check atleast one condition is true then it will return true otherwise false
// let isMajorAvailable = users.some(user => user.age >25)
// console.log(isMajorAvailable);

//to find one object from array if we found it object will return otherwise  it will return undefined
// let newuser = users.find(user => user.name == 'sathwik')
// console.log(newuser);

// to given object available in array or not
// let isAvailable = users.includes(user1)
// console.log(isAvailable);


// Assignment
interface Municipality{
    municipalityId:number;
    name:string;
    code:string;
    
}
interface District{
    districtId:number;
    name:string;
    code:string;
    municipalities:Municipality[];
}
interface state{
    stateId:number;
    name:string;
    code:string
    districts:District[];
}

let municipality1:Municipality={municipalityId:1,name:"Tenali",code:"TNL"}
let municipality2:Municipality={municipalityId:2,name:"Nellore",code:"NLR"}
let municipality3:Municipality={municipalityId:3,name:"Hyderabad",code:"HYD"}
let municipality4:Municipality={municipalityId:4,name:"Chennai",code:"CHN"}

let district1:District={districtId:1,name:"Guntur",code:"GNT",municipalities:[municipality1]}
let district2:District={districtId:2,name:"Nellore",code:"NLR",municipalities:[municipality2]}
let district3:District={districtId:3,name:"Hyderabad",code:"HYD",municipalities:[municipality3]}
let district4:District={districtId:4,name:"Ranga Reddy",code:"RR",municipalities:[municipality4]}

let state1:state={stateId:1,name:"Andhra Pradesh",code:"AP",districts:[district1,district2]}
let state2:state={stateId:2,name:"Telangana",code:"TS",districts:[district3,district4]}
// let state3:state={stateId:3,name:"Karnataka",code:"KA"}
// let state4:state={stateId:4,name:"Tamil Nadu",code:"TN"}
// console.log(state1);

let states:state[]=[state1,state2]

let district5:District={districtId:5,name:"Krishna",code:"KRN",municipalities:[]}

let newstates = states.map(state =>{
    if(state.stateId === 2){
        state.districts.push(district5)
    }
    return state
})

console.log(newstates);




// states.forEach(state =>{
//     state.districts.forEach(district =>{
//         district.municipalities.forEach(municipality =>{
//             console.log(state.name+" "+district.name+" "+municipality.name);
//         })
//     })
// }) 
            

// let states:state[]=[state1,state2]
// let districts:District[]=[district1,district2,district3,district4]
// let municipalities:Municipality[]=[municipality1,municipality2,municipality3,municipality4]

// municipalities.forEach(municipality =>{
//     let district:District | undefined = districts.find(district => district.districtId === municipality.municipalityId)
//     let state:state | undefined = states.find(state => state.stateId === district?.stateId)
//     console.log(municipality.name + " " + municipality.code + " " + district?.name+" "+state?.name);
// })
