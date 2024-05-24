import React from 'react'
import './login.css'
const Login = () => {
  return (
    <>
       <div className='Login-Container'>
        <h1 className='Login-Head'>Login ChatApp</h1>
        <span>Username</span>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        <span>Password</span>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"></input>
        <a href="#">
            {"Don't"} have an account?
        </a>
        <button type="button" class="btn btn-info">Login</button>
    </div>

    </>
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

