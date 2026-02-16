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
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.setName = function (name) {
        this.name = name;
    };
    Demo.prototype.getName = function () {
        console.log(this.name);
        return this.name;
    };
    return Demo;
}());
var d = new Demo();
d.setName("sathwik");
d.getName();
