import React from 'react'
import './Sidebar.css'
import SearchInput from '../SearchInput/SearchInput.jsx'
import Conversation from '../Conversation/Conversation.jsx'
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx'
import useGetConversation from '../../Hooks/useGetConversation'
import useConversation from '../../zustand/useConversation.js'

const Sidebar = () => {
 const {loading,conversation} =useGetConversation()
 const {selectedConversation} = useConversation();
  return (
    <div className={`Sidebar-Main ${selectedConversation ? 'setsidebaroff':"" }`}>
      <SearchInput/>
        {conversation.map((conversation)=>(
          <Conversation
          key={conversation._id} 
          conversation={conversation}
          emoji={"😋"}
          />
        ))}
        <LogoutBtn/>
    </div>
  )
}

export default Sidebar

//Start code for sidebar

// import React from 'react'
// import './Sidebar.css'
// import SearchInput from '../SearchInput/SearchInput.jsx'
// import Conversation from '../Conversation/Conversation.jsx'
// const Sidebar = () => {
//   return (
//     <div className='Sidebar-Main'>
//         <SearchInput/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>

//     </div>
//   )
// }

// export default Sidebar
