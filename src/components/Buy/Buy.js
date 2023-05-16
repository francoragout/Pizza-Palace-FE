import React, { useContext, useState } from 'react'
import Alert from '../Alert/Alert'
import { CartContext } from '../../contexts/CartContext';
import axios from 'axios';

const Buy = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const items = cartItems.map(item => `${item.category} ${item.name} (${item.count})`);

  const userId = JSON.parse(localStorage.getItem("user"));
  const user = userId.email

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

  const [hideButton, setHideButton] = useState(true)
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [requestError, setRequestError] = useState(false)

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const hour = now.toLocaleTimeString();
    return { date, hour };
  };

  const { date, hour } = getCurrentDateTime();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      date,
      hour,
      total,
      user,
      address,
      phone,
      items
    };

    try {
      const response = await axios.post('http://localhost:8000/requests/create-request', formData);
      console.log(response.data);
      setRequestSuccess(true);
      setRequestError(false)
      setHideButton(false)
      setTimeout(() => {
        window.location.reload();
      }, 3000);   
       
    } catch (error) {
      setRequestError(true)
      setRequestSuccess(false);
    }
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
            <form onSubmit={handleSubmit}>

              {requestSuccess && (
                <Alert 
                className="alert alert-success"
                icon="bi bi-check-circle-fill me-2"
                message="Pedido realizado exitosamente!"/>
              )}

              {requestError && (
                <Alert 
                className="alert alert-success"
                icon="bi bi-check-circle-fill me-2"
                message="Error al realizar pedido"/>
              )}

              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
                <div className="form-floating">
                  <input 
                  type="number"         
                  className="form-control" 
                  id="total" 
                  placeholder="Total a pagar"
                  value={total}
                  readOnly/>
                  <label htmlFor="total">Total a pagar</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-wallet2"></i></span>
                <div className="form-floating">
                  <input 
                  type="text"         
                  className="form-control" 
                  id="payment" 
                  placeholder="Metodo de pago" 
                  defaultValue="Efectivo"
                  readOnly/>
                  <label htmlFor="payment">Metodo de pago</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text"><i className="bi bi-person"></i></span>
                <div className="form-floating">
                  <input 
                  type="text"         
                  className="form-control" 
                  id="user" 
                  placeholder="Usuario" 
                  defaultValue={user}
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

              {hideButton && (
                <button type="submit" className="btn btn-secondary" disabled={!formValid}>Enviar pedido</button>
              )}
            </form>      
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Buy