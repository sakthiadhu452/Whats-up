import { useEffect, useState } from "react"


const useGetConversation = () => {
    const [loading,setloading] = useState([])
    const [conversation,setconversation] = useState([])

    useEffect (()=>{
        const getConversations = async () =>{
            setloading (true);
            try{
                
                const res= await fetch('/api/users');
                const data = await res.json()
           
                if(data.error){
                    throw new Error(data.error);

                }
                setconversation(data)
            }
            catch(error){
              
                toast.error(error.message)
            }
            finally{
                setloading(false)
            }
        }
        getConversations()
    },[])

    function updateConversation(content){
        setconversation(content);
        console.log(conversation)
    }
    return {loading,conversation,updateConversation}
}

export default useGetConversation
