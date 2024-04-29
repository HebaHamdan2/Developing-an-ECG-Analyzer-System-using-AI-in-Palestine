import React from 'react'

export default function CheckboxForSpec() {
  return (
  <>
<div className="form-control check-gender w-60 border-0 bg-transparent d-flex text-align-center justify-content-around align-items-center">
<span>I'm a :</span>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
   <label className="form-check-label" htmlFor="flexRadioDefault1">
    Medical Student
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
     Healthcare Professional
    </label>
  </div>
</div>

  </>
// <div className="form-control check-gender w-50 border-0 bg-transparent d-flex text-align-center justify-content-around align-items-center">

// <div  className={`${selectedGender==="male"?"selected":""} form-check check-gender`}>
//     <input type="checkbox" className='form-check-input check-gender' 
//     checked={selectedGender==="male"}

//     onChange={()=> onCheckboxChange("male")}
//     />
//     <label className="form-check-label" htmlFor="flexCheckDefault">
//     Male
//     </label>
// </div>
// <div htmlFor="" className={`${selectedGender==="female"?"selected":""} form-check check-gender` }>
//     <input type="checkbox" className='form-check-input check-gender' 
//     checked={selectedGender==="female"}
//     onChange={()=> onCheckboxChange("female")} />
//      <label className="form-check-label" htmlFor="flexCheckDefault">
//     Female
//     </label>
// </div> 
//  </div>
  )
}
