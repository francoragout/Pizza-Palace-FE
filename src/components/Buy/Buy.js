import React, { useState } from 'react'
import Alert from '../Alert/Alert'

const Buy = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user.email

  const [address, setAddress] = useState('')
  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }


  const [phone, setPhone] = useState('')
  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const [formValid, setFormValid] = useState(false);
  const isFormValid = address && phone;
  if (formValid !== isFormValid) {
    setFormValid(isFormValid);
  }


  const [requestSuccess, setRequestSuccess] = useState(false);
  const [requestError, setRequestError] = useState(false)


  const handleSendRequest = async () => {

  }




  return (
    
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <div className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Resumen de compra
          </div>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show"aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <form onSubmit={handleSendRequest}>

              {requestSuccess && (
                <Alert 
                className="alert alert-success"
                icon="bi bi-check-circle-fill me-2"
                message="Usuario registrado exitosamente"/>
              )}

              {requestError && (
                <Alert 
                className="alert alert-success"
                icon="bi bi-check-circle-fill me-2"
                message="Usuario registrado exitosamente"/>
              )}

              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-person"></i></span>
                <div className="form-floating">
                  <input 
                  type="text"         
                  className="form-control" 
                  id="user" 
                  placeholder="Usuario" 
                  defaultValue={userEmail}
                  readOnly/>
                  <label htmlFor="user">Usuario</label>
                </div>
              </div>

              <div className="input-group mb-1">
                <span className="input-group-text"><i className="bi bi-house-door"></i></span>
                <div className="form-floating">
                  <input 
                  type="text" 
                  maxLength="40"
                  className="form-control" 
                  id="address" 
                  placeholder="Dirección" 
                  onChange={handleAddressChange} 
                  value={address}/>
                  <label htmlFor="address">Dirección</label>
                </div>
              </div>
              <div className='mb-3'>
              {!address && <span className='text-secondary'>Este campo es requerido.</span>}
              </div>

              <div className="input-group mb-1">
                <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                <div className="form-floating">
                  <input 
                  type="number" 
                  maxLength="40"
                  className="form-control" 
                  id="phone" 
                  placeholder="Teléfono" 
                  onChange={handlePhoneChange} 
                  value={phone}/>
                  <label htmlFor="phone">Teléfono</label>
                </div>
              </div>
              <div className='mb-3'>
              {!phone && <span className='text-secondary'>Este campo es requerido.</span>}
              </div>
              <button type="submit" className="btn btn-secondary" disabled={!formValid}>Enviar pedido</button>
            </form>      
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Buy