import React from 'react'
import { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  function handleNameChange(event) {
    setName(event.target.value);
    setNameValid(event.target.value.match(/^[a-zA-Z]{3,20}$/));
  }

  const [lastname, setLastname] = useState('');
  const [lastnameValid, setLastnameValid] = useState(false);
  function handleLastnameChange(event) {
    setLastname(event.target.value);
    setLastnameValid(event.target.value.match(/^[a-zA-Z]{3,20}$/));
  }
  
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailValid(event.target.value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/));
  }
  
  const [password, setPassword] = useState('');
  const [lengthValid, setLengthValid] = useState(false);
  const [containsNumber, setContainsNumber] = useState(false);
  const [containsUpperCase, setContainsUpperCase] = useState(false);
  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setLengthValid(event.target.value.length >= 8);
    setContainsNumber(/\d/.test(event.target.value));
    setContainsUpperCase(/[A-Z]/.test(event.target.value));
    setPasswordsMatch(event.target.value === confirmPassword);
  }
  
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const [formValid, setFormValid] = useState(false);
  const isFormValid = nameValid && lastnameValid && emailValid && lengthValid && containsNumber && containsUpperCase && passwordsMatch;
  if (formValid !== isFormValid) {
    setFormValid(isFormValid);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-1">
        <input 
        type="text" 
        maxLength="20"
        className="form-control" 
        id="name" 
        placeholder="Nombre" 
        onChange={handleNameChange}
        value={name}/>
        <label htmlFor="name">Nombre</label>
      </div>
      <div className='mb-3'>
      {!nameValid && <span className='text-secondary'>Este campo es requerido.</span>}
      </div>

      <div className="form-floating mb-1">
        <input 
        type="text" 
        maxLength="20"
        className="form-control" 
        id="lastname" 
        placeholder="Apellido" 
        onChange={handleLastnameChange}
        value={lastname}/>
        <label htmlFor="lastname">Apellido</label>
      </div>
      <div className='mb-3'>
      {!lastnameValid && <span className='text-secondary'>Este campo es requerido.</span>}
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
        <div className="form-floating">
          <input 
          type="email" 
          maxLength="40"
          className="form-control" 
          id="email" 
          placeholder="Correo electrónico" 
          onChange={handleEmailChange} 
          value={email}/>
          <label htmlFor="email">Correo electrónico</label>
        </div>
      </div>
      <div className='mb-3'>
      {!emailValid && <span className='text-secondary'>Ingrese un email válido.</span>}
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text"><i className="bi bi-key"></i></span>
        <div className="form-floating">
          <input 
          type="password" 
          maxLength="30" 
          className="form-control" 
          id="password" 
          placeholder="Contraseña" 
          onChange={handlePasswordChange}
          value={password}/>
          <label htmlFor="password">Contraseña</label>
        </div>         
      </div>
      <div className='d-flex flex-column mb-3'>      
        {!lengthValid && <span className='text-secondary'>Debe tener al menos 8 caracteres.</span>}
        {!containsNumber && <span className='text-secondary'>Debe contener al menos un número.</span>}
        {!containsUpperCase && <span className='text-secondary'>Debe contener al menos una letra mayúscula.</span>}
      </div>

      <div className="input-group mb-1">
        <span className="input-group-text"><i className="bi bi-shield-check"></i></span>
        <div className="form-floating">
          <input 
          type="password" 
          maxLength="30" 
          className="form-control" 
          id="confirmPassword" 
          placeholder="Repetir Contraseña" 
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}        
          />
          <label htmlFor="password">Repetir contraseña</label>
        </div>         
      </div>
      <div className='d-flex flex-column mb-3'>      
        {!passwordsMatch && <span className='text-secondary'>Las contraseñas no coinciden.</span>}
        {passwordsMatch && <span className='text-secondary'>Las contraseñas coinciden.</span>}     
      </div>
      <button type="submit" className="btn btn-secondary" disabled={!formValid}>Registrarse</button>
    </form>
  )
}

export default Signup