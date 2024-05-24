import React from 'react'
import './IndMessage.css'
import avatar from '../../assets/user.png'
import { CiAlignBottom } from 'react-icons/ci'
const IndMessage = () => {
  return (
    <div className='Ind-Message Chat-End' >
        <div >
            <p style={{marginBottom:"0px"}} >Hello Sakthi</p>
            <img src={avatar} className='avatarMsg' alt="" />
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
