
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../Context/AuthContext.jsx'

const useSignup = () => {
    const {authUser,setauthUser}=useAuthContext();
    const [loading, setloading] = useState(false)
    const signup = async ({ fullname, username, confirmPassword, gender ,password}) => {
        const success = handleInputErrors({ fullname, username, password, confirmPassword, gender })
        
        if (!success) {
            return
        }
        setloading(true)
        const requestBody = {
            fullName: fullname,
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            gender: gender
          };
        try {
            // console.log(requestBody);
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(requestBody),
                
            })
            const data = await res.json();
            
            if(data.error){
                
                throw new Error (data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setauthUser(data);

        }
        catch (error) {
            toast.error(error.message)
        }
        finally {
            setloading(false)
        }
    }

    return{loading,signup}
}

export default useSignup



function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !gender || !confirmPassword) {
        toast.error('Please fill all the fields')
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }
    if(password.length<=6){
        toast.error('Password atleast need to be 6 characters')
        return false
    }
    return true;


}
