import React, { useState } from 'react'
// import './MessageInput.css'
import './MessageInput.css'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../Hooks/useSendMessage.js';

const MessageInput = () => {
  const [message,setmessage] = useState("")
  const {loading,sendMessage}  = useSendMessage()
  const handleSubmit= async (e) =>{
    e.preventDefault()
   
    if(!message) return;
    await sendMessage(message);
    setmessage("")
  }
  return (
    <div className='Msg-Input' >
      <form action="" onClick={handleSubmit} className='MsgInp' style={{display:'flex'}}>

      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Message..." value={message} onChange={(e)=>setmessage(e.target.value)}></input>
    <button type='submit'>
        <IoMdSend className='Send-Btn' style={{margin:'10px',fontSize:'20px'}}/>
    </button>
      
      </form>
    </div>
  )
}

export default MessageInput
