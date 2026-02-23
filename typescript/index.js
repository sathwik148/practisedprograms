// let a: number= 34;
// console.log(a);
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
var user1 = { "id": 1, "name": "sathwik", "email": "sathwik@gmail.com", "phone": "9392073857", "age": 21 };
var user2 = { "id": 2, "name": "sunny", "email": "sunny@gmail.com", "phone": "9392073858", "age": 26 };
var user3 = { "id": 3, "name": "sathwik1", "email": "sathwik2@gmail.com", "phone": "9392073859", "age": 23 };
var user4 = { "id": 4, "name": "sathwik2", "email": "sathwik3@gmail.com", "phone": "9392073860", "age": 18 };
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
var users = [user1, user2, user3, user4];
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
var isMajorAvailable = users.some(function (user) { return user.age > 25; });
console.log(isMajorAvailable);
