import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import MessageBox from '../../components/MessageBox/MessageBox.jsx'
import Call from '../../Components/Call/Call.jsx'
import './Home.css'
import useListenCalls from '../../Hooks/useListenCalls.js'

const Home = () => {
 

   const {newCall,ansCall,decCall,setansCall,setdecCall,callerName} = useListenCalls()
   
  return (
    <div className='Home-Container'>
      <Sidebar/>
      <MessageBox/>
      {newCall && !ansCall && !decCall ? <Call setansCall={setansCall} setdecCall={setdecCall} callerName={callerName} /> :null}
    </div>
  )
}

export default Home


//Starting code
// import React from 'react'
// import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
// import MessageBox from '../../Components/MessageBox/MessageBox.jsx'
// import './Home.css'
// const Home = () => {
//   return (
//     <div className='Home-Container'>
//       <Sidebar/>
//       <MessageBox/>
//     </div>
//   )
// }

// export default Home
