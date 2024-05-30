import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
// import { FindCursor } from 'mongodb';

const useGetMessages = () => {
    const [loading,setloading] = useState();
    const {messages,setmessages, selectedConversation} = useConversation()
     useEffect (()=>{
        const getMessages = async () =>{
            setloading(true);
                try{
                    
                    const res= await fetch(`api/messages/${selectedConversation._id}`,{
                        method:"GET",
                        headers:{
                            'Content-type':"application/json",
                        }
                    })
                    const data = await res.json()
                    // console.log(data)
                    if(data.error){
                        
                        throw new Error (data.error);
                    }
                  
                    setmessages(data)
                }
                catch(error){       
                    // console.log(error)
                    // toast.error(error.messages)
                }
                finally{
                    setloading(false);
                }
        }

        if(selectedConversation?._id){
            getMessages()
        }
     },[selectedConversation?._id,setmessages])
     return {messages,loading}
}

export default useGetMessages
