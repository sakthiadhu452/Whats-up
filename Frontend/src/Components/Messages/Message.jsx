import React, { useEffect, useRef } from 'react';
import './Message.css';
import IndMessage from '../IndMessage/IndMessage';
import useGetMessages from '../../Hooks/useGetMessages';
import useListenMessages from '../../Hooks/useListenMessages';




const Message = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages()
  const LastmessageRef = useRef();

  useEffect(() => {
    LastmessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className='Mesg-flex'>
      {messages.length === 0 && !loading ? (
        <>No mess!</>
      ) : (
        messages.map((message) => (
          <span key={message._id} ref={LastmessageRef}>
            <IndMessage message={[message]} />
          </span>
        ))
      )}
    </div>
  );
}

export default Message;
