import React from 'react'
import './LogoutBtn.css'
import { CiLogout } from "react-icons/ci";
import UseLogOut from '../../Hooks/UseLogOut';
const LogoutBtn = () => {
const {loading,logout} = UseLogOut()


  return (
    <div className='LogoutBtn' onClick={logout}>
      <CiLogout />
    </div>
  )
}

export default LogoutBtn



//Stat code

// import React from 'react'
// import './LogoutBtn.css'
// import { CiLogout } from "react-icons/ci";
// const LogoutBtn = () => {
//   return (
//     <div className='LogoutBtn'>
//       <CiLogout />
//     </div>
//   )
// }

// export default LogoutBtn
