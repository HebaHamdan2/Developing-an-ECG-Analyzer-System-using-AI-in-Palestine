import React from 'react'
import './checkbox.css'
export default function CheckboxForSpec({ onCheckboxChange, selectedRole }) {
  return (
    <>
      <div className="form-control check-gender w-lg-60  border-0 bg-transparent d-flex text-align-center justify-content-around align-items-center">
        <span>I'm a :</span>
        <div className={`${selectedRole === "Student" ? "selected" : ""} form-check check-role`}>
          <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1"
            checked={selectedRole === "Student"}
            onChange={() => onCheckboxChange("Student")}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Medical Student
          </label>
        </div>
        <div className={`${selectedRole === "HealthcareProfessional" ? "selected" : ""} form-check check-role`}>
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
            checked={selectedRole === "HealthcareProfessional"}
            onChange={() => onCheckboxChange("HealthcareProfessional")}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Healthcare Professional
          </label>
        </div>
      </div>

    </>
  )
}
