let url="http://localhost:3000/users";
let formState='Add';
function addUser(event) 
{
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
//json object
    let userDetails={
        "name":name,
        "email":email,
        "phone":phone
    }
    if(formState==='Add'){
         axios(url,{


            
        method:"POST",
        Headers:{
            'Content-Type':'application/json'
        },
        data:JSON.stringify(userDetails)
    }).then((response)=>{
        console.log(response.data);
        document.getElementById("message").innerText="User added successfully!";
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        getUsers();
    }).catch((error)=>{
        console.log(error);
        document.getElementById("message").innerText="Error adding user.";
    })
}else if(formState==='Edit'){
    let userId=document.getElementById("userId").value;
    let url2= url+"/"+userId;    
    axios(url2,{
        method:"PATCH",
        Headers:{
            'Content-Type':'application/json'
        },
        data:JSON.stringify(userDetails)
    }).then((response)=>{
        console.log(response);
        document.getElementById("message").innerText="User updated successfully!";
        getUsers();
    }).catch((error)=>{
        console.log(error);
        document.getElementById("message").innerText="Error updating user.";
    });
}
   
} 


function getUsers()
{
    if(formState==='Add'){
        document.getElementById('formTitle').innerText="Add user";
        document.getElementById('submitBtn').value="Add User";
    }
    axios.get(url).then(response=>
        {
            console.log(response.data);
            let usershtml="";
            for(let user of response.data)
            {
                usershtml = usershtml+`<tr>
                <td>${user['id']}</td>
                <td>${user['name']}</td>
                <td>${user['email']}</td>
                <td>${user['phone']}</td>
                <td><button onclick="deleteUser('${user['id']}')" class="btn btn-danger w-100">delete</button></td>
                <td><button onclick="editUser('${user['id']}')" class="btn btn-success w-100">edit</button></td>
                </tr>`;
                
            }
            document.getElementById("userDetails").innerHTML=usershtml;
            console.log(usershtml);
        }).
        catch((error)=>
            {
            console.log(error);
            })
} 
function deleteUser(userId)
{
    let url2= url + "/"+userId;
    axios.delete(url2).then((response)=>
    {
        console.log(response.data);
         getUsers();
         document.getElementById("message").innerText="User deleted successfully!";
    }).catch((error)=>
    {
        console.log(error);
        document.getElementById("message").innerText="Error deleting user.";
    })

}
function editUser(userId){
    let url2=url + "/"+userId;
    console.log("edit user :"+userId);
    axios(url2).then((response)=>
    {
        console.log(response.data);
        let user=response.data;
        document.getElementById("userId").value=user['id'];
        document.getElementById("name").value=user['name'];
        document.getElementById("email").value=user['email'];
        document.getElementById("phone").value=user['phone'];
        document.getElementById("formTitle").innerText="Edit User";
        document.getElementById("submitBtn").value="Update User";
        formState='Edit';   
        
         
    }).catch((error)=>
    {
        console.log(error);
    })

}
