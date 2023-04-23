import React from 'react'
import "../Accordion/accordion.css"
import Login from '../Forms/Login'
import Signup from '../Forms/Signup'

const Accordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <div className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse"data-bs-target="#collapseOne" aria-expanded="true"aria-controls="collapseOne">
            Iniciar Sesión
          </div>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show"aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <Login />         
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <div className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse"data-bs-target="#collapseTwo" aria-expanded="false"aria-controls="collapseTwo">
            Registrarse
          </div>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse"aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <Signup />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Accordion