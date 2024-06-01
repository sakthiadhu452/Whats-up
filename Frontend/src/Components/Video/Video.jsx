import React from 'react'
import './Video.css'
import useConversation from '../../zustand/useConversation'
import { MdCallEnd } from "react-icons/md";import MyVideo from '../MyVideo/MyVideo.jsx';
import OtherVideo from '../../Components/OtherVideo/OtherVideo.jsx';


const Video = ({videoCall,setvideoCall}) => {

  const {selectedConversation,setselectedConversation}  = useConversation();
  
  return (
    <div style={{height:"100%",width:"100%"}}>
      {selectedConversation ? <MdCallEnd className='decline-Btn' onClick={()=>{setvideoCall(null)}} /> : null}
      <MyVideo videoCall={videoCall} />
      <OtherVideo/>


    </div>
  )
}

export default Video
