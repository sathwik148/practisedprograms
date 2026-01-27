import axios from "axios";
// async function addproducts(){
//     let data={"phone":"sunny","color":"black"}
//     let url="http://localhost:3000/users"
//     let response = await axios(url,{
//         method:"POST",
//         data:JSON.stringify(data)
//     })
//     .then(response=>{
//         console.log(response);
//     })
//     .catch(error=>{
//         console.log(error);
//     })
    
// }
//addproducts()

async function addproducts(){
    try {
    let data={"phone":"sunny","color":"black"}
    let url="http://localhost:3000/users"
    let response = await fetch(url,{
        method:"POST",
        body:JSON.stringify(data)

    })
    if (!response.ok) {
        throw new Error(response.status+""+response.statusText);
    }
}catch(error){
        console.log(error);
    }
}
//addproducts()

async function getproducts(){
    try {
        let url="http://localhost:3000/users"
        let response = await fetch(url,{
            method:"GET"
        })
        if (!response.ok) {
            throw new Error(response.status+""+response.statusText);
        }
    }catch(error){
        console.log(error);
    }
}