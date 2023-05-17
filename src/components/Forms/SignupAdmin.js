import React from 'react'
import SignupUser from './SignupUser'

const SignupAdmin = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <div className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse"data-bs-target="#collapseOne" aria-expanded="true"aria-controls="collapseOne">
            Agregar admin
          </div>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show"aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <SignupUser />         
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupAdmin