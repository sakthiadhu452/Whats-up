import React from 'react'
import './SignUp.css'
import './GenderCheckbox.jsx'
import GenderCheckbox from './GenderCheckbox.jsx'
const Signup = () => {
  return (
    <>
       <div className='Signup-Container'>
        <h1 className='Signup-Head'>Signup ChatApp</h1>
        <span>Username</span>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        <span>Password</span>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"></input>
        <span>Confirm Password</span>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password Again"></input>
        <div style={{display:'flex'}}> 
            <GenderCheckbox/>
        </div>
        <a href="#">
            Already have an account?
        </a>

        <button type="button" class="btn btn-info">Signup</button>
    </div>

    </>
  )
}

export default Signup




//Startring code

// import React from 'react'
// import './SignUp.css'
// import './GenderCheckbox.jsx'
// import GenderCheckbox from './GenderCheckbox.jsx'
// const Signup = () => {
//   return (
//     <>
//        <div className='Signup-Container'>
//         <h1 className='Signup-Head'>Signup ChatApp</h1>
//         <span>Username</span>
//         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
//         <span>Password</span>
//         <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password"></input>
//         <span>Confirm Password</span>
//         <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password Again"></input>
//         <div style={{display:'flex'}}> 
//             <GenderCheckbox/>
//         </div>
//         <a href="#">
//             Already have an account?
//         </a>

//         <button type="button" class="btn btn-info">Signup</button>
//     </div>

//     </>
//   )
// }

// export default Signup
