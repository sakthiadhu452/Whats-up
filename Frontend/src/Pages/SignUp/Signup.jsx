import React, { useState } from 'react'
import './Signup.css'
import './GenderCheckbox.jsx'
import GenderCheckbox from './GenderCheckbox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../Hooks/useSignup.js'
const Signup = () => {

const [inputs,setInputs]= useState({
  fullname:'',
  username:'',
  password:'',
  confirmPassword:'',
  gender:'',
})
const {loading,signup}= useSignup()

const handleCheckboxChanger=(gender)=>{
  setInputs({...inputs,gender})
  // console.log(inputs)
}

const handleSubmit=async (e)=>{
  e.preventDefault();
  await signup(inputs);
}
  return (
    <form onSubmit={handleSubmit}>
       <div className='Signup-Container'>
        <h1 className='Signup-Head'>Signup ChatApp</h1>
        <span>Fullname</span>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter fullname" value={inputs.fullname} onChange={(e)=>{{setInputs({...inputs,fullname:e.target.value})}}}></input>
        <span>Username</span>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value={inputs.username} onChange={(e)=>{{setInputs({...inputs,username:e.target.value})}}}></input>
        <span>Password</span>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" value={inputs.password} onChange={(e)=>{{setInputs({...inputs,password:e.target.value})}}}></input>
        <span>Confirm Password</span>
        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password Again" value={inputs.confirmPassword} onChange={(e)=>{{setInputs({...inputs,confirmPassword:e.target.value})}}}></input>
        <div style={{display:'flex'}}> 
            <GenderCheckbox onCheckboxChange={handleCheckboxChanger}  selectedGender={inputs.gender} />
        </div>
        <Link to="/login">
            Already have an account?
        </Link>

        <button  type="submit" style={{width:'100px'}} class="btn btn-info"  >Signup</button>
    </div>

    </form>
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
