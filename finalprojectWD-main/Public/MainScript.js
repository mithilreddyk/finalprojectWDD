 let getBtn = document.getElementById("btn-users");
 if(getBtn) getBtn.addEventListener('click',getAllUsers);
function getAllUsers(){
    fetch("http://localhost:3000/users/test")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}


// const { getAllUsers } = require("./server/models/user");

const login_m=document.getElementById("login");
const reg=document.getElementById("registration");
const msg=document.getElementById("post");
if(login_m) login_m.addEventListener('submit',loginpage)
if(reg) reg.addEventListener('submit',registerpage)
if(msg) msg.addEventListener('submit',postpage)
function registerpage(e){
    e.preventDefault();
    let username1=document.getElementById('username').value;
    let username2=document.getElementById('lname').value;
    let emailaddress=document.getElementById('email').value;
    let passwrd=document.getElementById('password').value;

class User{
    constructor(user1,user2,email1,password1)
   {
        this.username=user1;
        this.lname=user2;
        this.email=email1;
        this.password=password1;
    }
    
    getusername(){
      return this.username;
    }
    getlname(){
        return this.lname;
      }
    getemail()
    {
        return this.email;
    }
    getpassword()
    {
        return this.password;
    }
    setusername(user1)
   {
    this.username=user1;
   }
   setlname(user2)
   {
    this.lname=user2;
   }
    setemail(email1)
    {
        this.email=email1;
    }
    setpassword(password1)
    {
        this.password=password1;
    }
}
let regi= new User(username1,username2,emailaddress,passwrd);
     console.log(regi);
}  
function loginpage(e)
{
    e.preventDefault()

    let u_name=document.getElementById("username").value;
    let pswd=document.getElementById("password").value;
   
    class User{
        constructor(user1,password1)
        {
           
            this.username=user1;
            this.password=password1;
        }

        getusername(){
            return this.username;
          }
       getpassword()
    {
        return this.password;
    }
    setusername(user1)
    {
     this.username=user1;
    }
    setpassword(password1)
    {
        this.password=password1;
    }
       }
   
    const user1=new User(u_name,pswd);
    console.log(user1);
}

function postpage(e)
{
    e.preventDefault()
   
    let psth=document.getElementById('pst').value;
   
   
    class User{
        constructor(posthere)
        {
           
            this.posthere=posthere;
           
        }
        getposthere(){
            return this.posthere;
        }
        setposthere(posthere){
            this.posthere = posthere;
        }
    }

    const user1=new User(psth);
    console.log(user1);
}
// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  } 

