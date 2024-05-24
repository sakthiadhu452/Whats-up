import React from 'react'
import './MessageInput.css'
import { IoMdSend } from "react-icons/io";
const MessageInput = () => {
  return (
    <div className='Msg-Input' >
      <form action="" style={{display:'flex'}}>

      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Message..."></input>
      <IoMdSend className='Send-Btn' style={{margin:'10px',fontSize:'20px'}}/>
      
      </form>
    </div>
  )
}
import './MessageInput.css'
export default MessageInput
