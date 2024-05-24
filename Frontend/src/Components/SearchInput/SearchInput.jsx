import React from 'react'
import './SearchInput.css'
import { IoIosSearch } from "react-icons/io";
const SearchInput = () => {
  return (
    <div>
      <form action="" className='flex-con'>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search..."/>
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
