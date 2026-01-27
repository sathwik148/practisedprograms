import axios from "axios";
// axios("http://localhost:3000/products")
// .then(response=>{
//     console.log(response);
    
// }).catch(result=>{
//     console.log(result);
    
// })
function addproducts(){
    let data={"phone":"sunny","color":"black"}
    axios("http://localhost:3000/products",{
        method:"POST",
        data:JSON.stringify(data),
        Headers:{
            "content-type":"application/json"
        }
    }).then(response=>{
         console.log(response);
         
    }).catch(err=>{
        console.log(err);
        
    })
}
addproducts()

function displayproducts(){
    axios("http://localhost:3000/products",{
        method:"GET",
        Headers:{
            "content-type":"application/json"
        }
    }).then(response=>{
         console.log(response);
         
    }).catch(err=>{
        console.log(err);
        
    })
}
displayproducts()

function displayproduct(){
    axios("http://localhost:3000/products/8999",{
        method:"GET",
        Headers:{
            "content-type":"application/json"
        }
    }).then(response=>{
         console.log(response);
         
    }).catch(err=>{
        console.log(err);
        
    })
}
displayproduct()

function modifyproduct(){
    let body={"phone":"iphone","color":"black"}
    axios("http://localhost:3000/products/8999",{
        method:"Put",
        data:JSON.stringify(body),
        Headers:{
            "content-type":"application/json"
        }
    }).then(response=>{
         console.log(response);
         
    }).catch(err=>{
        console.log(err);
        
    })
}
modifyproduct()

function replaceproduct(){
    let body={"phone":"iphone2","color":"black"}
    axios("http://localhost:3000/products/8999",{
        method:"Patch",
        data:JSON.stringify(body),
        Headers:{
            "content-type":"application/json"
        }
    }).then(response=>{
         console.log(response);
         
    }).catch(err=>{
        console.log(err);
        
    })
}
replaceproduct()

function deleteproduct(){
    axios("http://localhost:3000/products/8999",{
        method:"delete",
        Headers:{
            "content-type":"application/json"
        }
    }).then(response=>{
         console.log(response);
         
    }).catch(err=>{
        console.log(err);
        
    })
}
deleteproduct()