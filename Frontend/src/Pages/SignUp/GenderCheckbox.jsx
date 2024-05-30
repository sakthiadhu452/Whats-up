import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div style={{display:'flex'}}>
        <div class="form-check">
  <label class="form-check-label" for="defaultCheck1" style={{padding:'0px 20px 0px 0px'}}>
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={selectedGender==="male"} onChange={()=>onCheckboxChange("male")}/>
    Male
  </label>
</div>
<div class="form-check">
  <label class="form-check-label" for="defaultCheck2"  style={{padding:'0px 20px 0px 0px'}}>
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" checked={selectedGender==="female"} onChange={()=>onCheckboxChange("female")} />
    Female
  </label>
</div>
    </div>
  )
}

export default GenderCheckbox



//Starting code for gender component


// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div style={{display:'flex'}}>
//         <div class="form-check">
//   <label class="form-check-label" for="defaultCheck1" style={{padding:'0px 20px 0px 0px'}}>
//   <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
//     Male
//   </label>
// </div>
// <div class="form-check">
//   <label class="form-check-label" for="defaultCheck2"  style={{padding:'0px 20px 0px 0px'}}>
//   <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
//     Female
//   </label>
// </div>
//     </div>
//   )
// }

// export default GenderCheckbox
