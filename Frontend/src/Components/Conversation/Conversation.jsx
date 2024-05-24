import React from 'react'
import avatar from '../../assets/user.png'
import './Conversation.css'
const Conversation = () => {
  return (
    <div className='Main-Container'>
        <div className='flex-container'>
            <img src={avatar} className='avatar' alt='avatar-icon'></img>
            <p>Sakthi</p>
            <div className='emoji'>😁</div>
        <hr/>
        </div>
    </div>
  )
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
