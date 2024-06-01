import { useEffect, useState ,useRef} from "react"
// import { toast } from "react-toastify"; 

const useGetConversation = () => {
    const [loading,setloading] = useState([])
    const [conversation,setconversation] = useState([])
    const conversationPromise = useRef(null);
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
                conversationPromise.current = Promise.resolve(data); 
            }
            catch(error){
                
                conversationPromise.current = Promise.reject(error); 
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
    return {loading,conversation,updateConversation,conversationPromise: conversationPromise.current }
}

export default useGetConversation
