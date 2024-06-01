import React from 'react'
import './Video.css'
import useConversation from '../../zustand/useConversation'
import { MdCallEnd } from "react-icons/md";import MyVideo from '../MyVideo/MyVideo.jsx';

const Video = ({videoCall,setvideoCall}) => {

  const {selectedConversation,setselectedConversation}  = useConversation();
  
  return (
    <div>
      {selectedConversation ? <MdCallEnd className='decline-Btn' onClick={()=>{setvideoCall(null)}} /> : null}
      <MyVideo videoCall={videoCall} />



    </div>
  )
}

export default Video
