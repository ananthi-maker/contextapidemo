import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
//import  { useState } from 'react'
function Login() {
    const{setName,setProfileInfo}=useContext(LoginContext)
   // const[name,setName]=useState("")
    //const[pwd,setPwd]=useState("")
   // const[profileinfo,setProfileInfo]=useState(false)
   // const Show=()=>{
      //  if(name==="ananthi" && pwd==="admin@143")
       // setProfileInfo(true)
      //  else
       // setProfileInfo(false)

  return (
    <div>
        <input type="text"onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
        <br></br>
        <input type="password" placeholder='Enter Password...'></input>
        <br></br>
        <input type="button"onClick={()=>setProfileInfo(true)}value='Login'></input>
        <br></br>
        {/*{(profileinfo && "Valid User: "+name+"!")|| "Invalid User!!!"}*/}
       
       </div>
  ) 
}

export default Login
