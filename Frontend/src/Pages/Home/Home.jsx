import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import MessageBox from '../../Components/MessageBox/MessageBox.jsx'
import './Home.css'
const Home = () => {
  return (
    <div className='Home-Container'>
      <Sidebar/>
      <MessageBox/>
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
