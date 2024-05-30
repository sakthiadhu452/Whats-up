import React, { useContext } from 'react'
import avatar from '../../assets/user.png'
import './Conversation.css'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../Context/SocketContext'


const Conversation = ({conversation,emoji}) => {
  const {selectedConversation,setselectedConversation} =useConversation()

  const isSelected = selectedConversation?._id  === conversation._id;
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <div className='Main-Container' onClick={()=>setselectedConversation(conversation)} style={isSelected ? { backgroundColor: "blue" } : null}>
      <div className='flex-container'>
        <img src={conversation.profilepic} className='avatar' alt='avatar-icon' />
        <p>{conversation.fullName}</p>
        <div className='emoji'>{emoji}</div>
        <div className={isOnline?'online':""}></div>
        <hr />
      </div>
    </div>
  );
  
}

export default Conversation



//starting code
// import React from 'react'
// import avatar from '../../assets/user.png'
// import './Conversation.css'
// const Conversation = () => {
//   return (
//     <div className='Main-Container'>
//         <div className='flex-container'>
//             <img src={avatar} className='avatar' alt='avatar-icon'></img>
//             <p>Sakthi</p>
//             <div className='emoji'>😁</div>
//         <hr/>
//         </div>
//     </div>
//   )
// }

// export default Conversation
