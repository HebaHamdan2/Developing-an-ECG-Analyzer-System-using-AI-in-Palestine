import React from 'react';  // Import the React library

import './checkbox.css';  // Import a CSS file to style the checkbox component

export default function CheckboxForSpec({ onCheckboxChange, selectedRole }) {
  return (
    // Container div with CSS classes for styling
    <div className="form-control check-gender w-lg-60 border-0 bg-transparent d-flex text-align-center justify-content-around align-items-center">
      <span>I'm a :</span>  

      {/* Radio input for selecting "Medical Student" */}
      <div className={`${selectedRole === "Student" ? "selected" : ""} form-check check-role`}>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onChange={() => onCheckboxChange("Student")}  // Call onCheckboxChange function with "Student" as argument when selected
          checked={selectedRole === "Student"}  // Check if the selected role is "Student"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Medical Student
        </label>
      </div>

      {/* Radio input for selecting "Healthcare Professional" */}
      <div className={`${selectedRole === "HealthcareProfessional" ? "selected" : ""} form-check check-role`}>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={() => onCheckboxChange("HealthcareProfessional")}  // Call onCheckboxChange function with "HealthcareProfessional" as argument when selected
          checked={selectedRole === "HealthcareProfessional"}  // Check if the selected role is "HealthcareProfessional"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Healthcare Professional
        </label>
      </div>
    </div>
  );
}
