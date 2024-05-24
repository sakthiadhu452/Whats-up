import React from 'react'
import './Sidebar.css'
import SearchInput from '../SearchInput/SearchInput.jsx'
import Conversation from '../Conversation/Conversation.jsx'
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx'
const Sidebar = () => {
  return (
    <div className='Sidebar-Main'>
        <SearchInput/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
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
