import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext'
const UseLogin = () => {
    const [loading,setloading] = useState(false);
    const {setauthUser} =useAuthContext()

    const login = async (username,password) =>{

        const success = handleInputErrors({ username,password })
        
        if (!success) {
            return
        }


        setloading(true)
        try{
            const res = await fetch("/api/auth/login", {
                method: "POST", // Specifies that it's a POST request
                headers: {
                    "Content-Type": "application/json" // Specifies the type of content in the request body as JSON
                },
                body: JSON.stringify({ // Converts JavaScript object to a JSON string
                    username: username, // Assuming username is a variable containing the username
                    password: password  // Assuming password is a variable containing the password
                })
            });
            
            const data = await res.json()
            // console.log(data)
            if(data.error){
                throw new Error (data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setauthUser(data)
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setloading(false)
        }
    }
    return {loading,login}
}

export default UseLogin




function handleInputErrors({ username, password }) {
    if ( !username || !password ) {
        toast.error('Please fill all the fields')
        return false;
    }
    
    return true;


}
