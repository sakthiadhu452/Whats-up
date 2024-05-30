import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import UseLogin from '../../Hooks/UseLogin.js'

const Login = () => {
  const [Username,setUsername]= useState("");
  const [password,setPassword] = useState(""); 
  const {loading,login} = UseLogin()


  async function handleSubmit(e){
    e.preventDefault();
    await login (Username,password)
     
  }

  return (
    <form onSubmit={handleSubmit}>
       <div className='Login-Container'>
        <h1 className='Login-Head'>Login ChatApp</h1>
        <span>Username</span>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=> setUsername(e.target.value)}></input>
        <span>Password</span>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"  onChange={(e)=> setPassword(e.target.value)}></input>
        <Link to="/signup">
            {"Don't"} have an account?
        </Link>
        <button type="submit" class="btn btn-info">Login</button>
    </div>

    </form>
  )
}

export default Login








//Starter Code for this file

// import React from 'react'
// import './login.css'
// const Login = () => {
//   return (
//     <>
//        <div className='Login-Container'>
//         <h1 className='Login-Head'>Login ChatApp</h1>
//         <span>Username</span>
//         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
//         <span>Password</span>
//         <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"></input>
//         <a href="#">
//             {"Don't"} have an account?
//         </a>
//         <button type="button" class="btn btn-info">Login</button>
//     </div>

//     </>
//   )
// }

// export default Login

