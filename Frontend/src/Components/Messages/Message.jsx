import React from 'react';
import './Message.css';
import IndMessage from '../IndMessage/IndMessage';
import useGetMessages from '../../Hooks/useGetMessages';

const Message = () => {
  const { messages, loading } = useGetMessages();
   // This line logs the messages to the console for debugging purposes
    
    return (
      <div className='Mesg-flex'>
      {  messages.length===0 && !loading ? (
        <>No mess!</>
      ) : (
        
        messages.map((message) => (
          <IndMessage key={message._id} message={[message]} />
        ))
      )}
    </div>
  
  );
}

export default Message;
