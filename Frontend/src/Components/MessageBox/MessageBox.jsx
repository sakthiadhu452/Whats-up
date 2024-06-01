import React, { useContext, useEffect, useState } from "react";
import "./MessageBox.css";
import Message from "../Messages/Message";
import MessageInput from "../MessageInput/MessageInput";
import useConversation from "../../zustand/useConversation";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineVideoCall } from "react-icons/md";
import Video from "../Video/Video";

const MessageBox = () => {
  const [videoCall, setvideoCall] = useState(false);
  const { selectedConversation, setselectedConversation } = useConversation();
  //cleanup function unmount
  useEffect(() => {
    return () => setselectedConversation(null);
  }, []);

  return (
    <div className={`Messagebox-Main ${selectedConversation ? "viewOn" : ""}`}>
      <>
        {videoCall && selectedConversation ? (
          <Video videoCall={videoCall}  setvideoCall={setvideoCall}/>
        ) : (
          <NovideoCmp
            selectedConversation={selectedConversation}
            videoCall={setvideoCall}
            setselectedConversation={setselectedConversation}
          />
        )}
      </>
    </div>
  );
};

const NoChatSelectedCmp = () => {
  return <div>No selected chats, please select a chat to continue.</div>;
};

const NovideoCmp = ({ selectedConversation,setselectedConversation, videoCall }) => {
  return (
    <>
      {!selectedConversation ? (
        <NoChatSelectedCmp />
      ) : (
        <div style={{ height: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {selectedConversation ? (
                <FaAngleLeft
                  className="MesgBackBtn"
                  onClick={() => {
                    setselectedConversation(null);
                  }}
                />
              ) : null}
              <span>TO:{selectedConversation.fullName}</span>
              <span>
                <MdOutlineVideoCall
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={() => {
                    videoCall(true);
                  }}
                />
              </span>
            </div>

            <Message />
            <MessageInput />
          </div>
        </div>
      )}
    </>
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
