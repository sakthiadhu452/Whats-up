import React from 'react';
import './MessageBox.css';
import Message from '../Messages/Message';
import MessageInput from '../MessageInput/MessageInput';

const MessageBox = () => {
  const NoChatSelected = false;

  return (
    <div className='Messagebox-Main'>
      {NoChatSelected ? (
        <NoChatSelectedCmp />
      ) : (
        <div >
          <div>
            TO: <span>Surya</span>
          </div>
          <Message />
          <MessageInput />
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
