import React from 'react'
import './IndMessage.css'
import avatar from '../../assets/user.png'
import { CiAlignBottom } from 'react-icons/ci'
import { useAuthContext } from '../../Context/AuthContext'
import useConversation from '../../zustand/useConversation'


const IndMessage = ({key,message}) => {
  const {authUser} = useAuthContext()
   const userId= authUser._id;
   const {selectedConversation} = useConversation();
   console.log(authUser,selectedConversation)
  return (
<div className={`Ind-Message ${userId === message[0].senderId ? 'Chat-End' : 'Chat-Start'}`}>
        <div >
            <p style={{marginBottom:"0px"}} >{message[0].message}</p>
            <img src={userId === message[0].senderId ? authUser.profilePic : selectedConversation.profilepic} className='avatarMsg' alt="" />
        </div>
    </div>
  )
}

export default IndMessage


//Starting code
// import React from 'react'
// import './IndMessage.css'
// import avatar from '../../assets/user.png'
// import { CiAlignBottom } from 'react-icons/ci'
// const IndMessage = () => {
//   return (
//     <div className='Ind-Message Chat-End' >
//         <div >
//             <p style={{marginBottom:"0px"}} >Hello Sakthi</p>
//             <img src={avatar} className='avatarMsg' alt="" />
//         </div>
//     </div>
//   )
// }

// export default IndMessage
