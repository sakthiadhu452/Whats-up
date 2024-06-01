import { useEffect, useState, useCallback } from "react";
import { useSocketContext } from "../Context/SocketContext";
import useGetConversation from "./useGetConversation";

const useListenCalls = () => {
  const { socket } = useSocketContext();
  const { conversation, conversationPromise } = useGetConversation();
  const [newCall, setnewCall] = useState(false);
  const [ansCall, setansCall] = useState(false);
  const [decCall, setdecCall] = useState(false);
  const [callerName, setCallerName] = useState("");
  const [videoCmpConnect, setVideoCmpConnect] = useState(false);
   
  useEffect(() => {
    const handleNewCall = async (data) => {
      try {
        await conversationPromise;
        const caller = conversation.find((conv) => conv._id === data.from);
        alert(caller)
        if (caller) {
          setCallerName(caller.fullName);
          setnewCall(true);
          setansCall(false);
          setdecCall(false);
        }
      } catch (error) {
        console.error("Error handling new call:", error);
      }
    };

    const handleCallAccepted = () => {
        
      setVideoCmpConnect(true);
    };

    socket?.on("newCall", handleNewCall);
    socket?.on("callAccepted", handleCallAccepted);

    return () => {
      socket?.off("newCall", handleNewCall);
      socket?.off("callAccepted", handleCallAccepted);
    };
  }, [socket, conversation, conversationPromise]);

  useEffect(() => {
    if (ansCall) {
      socket?.emit("acceptCall");
    }
    if (decCall) {
      socket?.emit("declineCall");
    }
  }, [ansCall, decCall, socket]);

  return {
    newCall,
    decCall,
    ansCall,
    callerName,
    videoCmpConnect,
    setansCall,
    setdecCall,
    setVideoCmpConnect,
    callerName,
  };
};

export default useListenCalls;
