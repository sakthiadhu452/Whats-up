import { createContext, useState,useEffect,useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"
export const SocketContext = createContext()

export const useSocketContext = () =>{
    return useContext(SocketContext)
}

export const SocketConetxtProvider = ({children}) =>{
    const [socket,setsocket] = useState(null);
    const [onlineUsers,setOnineUsers] =  useState([])
    const {authUser} = useAuthContext()

    useEffect(()=>{
        if(authUser){
            const socket = io("https://whats-up-1.onrender.com",{
                query:{
                    userId:authUser._id,
                }
            });

            setsocket(socket);
            socket.on("getOnlineUsers",(users)=>{
              setOnineUsers(users);  
            })
            return () => socket.close();
        }
        else{
            if(socket){
                socket.close();
                setsocket(null)
            }
        }
    },[authUser])
    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}