import React, { useContext, useEffect } from 'react';
import './MessageBox.css';
import Message from '../Messages/Message';
import MessageInput from '../MessageInput/MessageInput';
import useConversation from '../../zustand/useConversation';
import { FaAngleLeft } from "react-icons/fa6";

const MessageBox = () => {
  const {selectedConversation,setselectedConversation}= useConversation()
  //cleanup function unmount
  useEffect(()=>{
    return ()=>setselectedConversation(null);
  },[])

  return (
<div className={`Messagebox-Main ${selectedConversation ? 'viewOn' : ''}`}>
      {selectedConversation ? <FaAngleLeft  className="MesgBackBtn" onClick={()=>{setselectedConversation(null)}} /> : null}
      {!selectedConversation ? (
        <NoChatSelectedCmp />
      ) : (<div style={{height:"100%"}}>
      
      
        <div style={{display:"flex",flexDirection:"column",position:"relative"}} >
          <div>
            TO: <span>{selectedConversation.fullName}</span>
          </div>
          <Message />
          <MessageInput />
        </div>
      </div>
      )}
    </div>
  );
};

const NoChatSelectedCmp = () => {
  return (
    <div >
      No selected chats, please select a chat to continue.
    </div>
  );
};

export default MessageBox;

      //Starting code
      
      // import React from 'react'
      // import './MessageBox.css'
      // import Message from '../Messages/Message.jsx'
      // import MessageInput from '../MessageInput/MessageInput.jsx'
      // const MessageBox = () => {
      //   return (
      //     <div className='Messagebox-Main'>
      //       <div>
      //         TO:<span>Surya</span>
      //       </div>
      //       <Message/>
      //       <MessageInput/>
      
      //     </div>
      //   )
      // }
      
      // export default MessageBox
