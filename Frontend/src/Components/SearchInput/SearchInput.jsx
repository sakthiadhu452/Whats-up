import React, { useState,useEffect } from 'react'
import './SearchInput.css'
import { IoIosSearch } from "react-icons/io";
import useConversation from '../../zustand/useConversation';
import useGetconversation from '../../Hooks/useGetConversation.js';

const SearchInput = () => {
  const [search,setsearch] = useState("")
  const {conversation,updateConversation} = useGetconversation()



  const handleSubmit =()=>{
      if(!search) return 
      const filteredConversations = conversation.filter((conversation) => {
        return conversation.fullName.toLowerCase().includes(search.toLowerCase());
      });
      updateConversation(filteredConversations)
  }

  useEffect(() => {
    handleSubmit()
  }, [search]);

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className='flex-con'>
      <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e)=>{setsearch(e.target.value);}} placeholder="Search..."/>
      <button>
      <IoIosSearch />
      </button>
      </form>
    </div>
  )
}

export default SearchInput


//Starting code
// import React from 'react'
// import './SearchInput.css'
// import { IoIosSearch } from "react-icons/io";
// const SearchInput = () => {
//   return (
//     <div>
//       <form action="" className='flex-con'>
//       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search..."/>
//       <button>
//       <IoIosSearch />
//       </button>
//       </form>
//     </div>
//   )
// }

// export default SearchInput
