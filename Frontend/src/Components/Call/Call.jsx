import React from 'react'
import './Call.css'
import { IoIosCall } from "react-icons/io";
import { MdCallEnd } from "react-icons/md";

const Call = ({setansCall,setdecCall,callerName}) => {
  
  return (
    <div className='Call-Main'>
      <div className='Name'> 
            Call From {callerName}
      </div>
      <div className='AttendBtn'>
        <IoIosCall onClick={()=>{setansCall(true)}} />
      </div>
      <div className='DeclineBtn'>
        <MdCallEnd onClick={()=>{setdecCall(true)}} />
      </div>
    </div>
  )
}
import './Call.css'

export default Call
