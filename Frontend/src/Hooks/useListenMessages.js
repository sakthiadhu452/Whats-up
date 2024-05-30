import { useEffect } from "react";
import { useSocketContext } from "../Context/SocketContext"
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages,setmessages} = useConversation()
  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        setmessages([...messages,newMessage])
    })
    return () => socket?.off("newMessage")
  },[socket,setmessages,messages])
}

export default useListenMessages
