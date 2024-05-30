import useConversation from "../zustand/useConversation"

import { useState } from "react"

import toast from 'react-hot-toast'

const useSendMessage = () => {
const [loading,setloading] = useState(false)
const {messages,setmessages,selectedConversation} = useConversation()
const sendMessage = async (message) =>{
   
    try{
        const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
          });
        const data= await res.json();
        // console.log(data)
        if(data.error) throw new Error(data.error)
        setmessages([...messages,data.message])
    }
    catch (error){
        toast.error(error.message);
    }
    finally{
        setloading(false)
    }
}
return {sendMessage,loading}
}

export default useSendMessage
