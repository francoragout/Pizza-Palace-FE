import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Alert from '../Alert/Alert';
import { useLocation } from 'react-router-dom';

const SignupUser = () => {
  const location = useLocation();
  const role = location.pathname === '/' ? 'user' : 'admin';
  const btn = location.pathname === '/' ? 'Resgistrarse' : 'Agregar admin';

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameValid(event.target.value.match(/^[a-zA-Z]{3,30}(\s[a-zA-Z]{2,30}){0,2}$/));
  }

  const [lastname, setLastname] = useState('');
  const [lastnameValid, setLastnameValid] = useState(false);
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
    setLastnameValid(event.target.value.match(/^[a-zA-Z]{3,30}(\s[a-zA-Z]{2,30}){0,2}$/));
  }
  
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailValid(event.target.value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/));
  }
  
  const [password, setPassword] = useState('');
  const [lengthValid, setLengthValid] = useState(false);
  const [containsNumber, setContainsNumber] = useState(false);
  const [containsUpperCase, setContainsUpperCase] = useState(false);
  const handlePasswordChange = (event) => {
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
  
  const [hideButton, setHideButton] = useState(true)
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerWarning, setRegisterWarning] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  
  const handleSubmit = async(event) => {
    event.preventDefault();

    const formData = {
      name,
      lastname,
      email,
      password,
      role 
    };

    try {
      const response = await axios.post(`https://pizza-palace-be-production.up.railway.app/users/signup-user`, formData);
      console.log(response.data);
      setRegisterSuccess(true);
      setRegisterError(false)
      setRegisterWarning(false)
      setHideButton(false)
      setTimeout(() => {
        window.location.reload();
      }, 2000);   
      
    } catch (error) {
      if (error.response.status === 400) {
        setRegisterWarning(true)
        setRegisterSuccess(false)
        setRegisterError(false)
      } else {
        setRegisterError(true)
        setRegisterSuccess(false)
        setRegisterWarning(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      {registerSuccess && (
        <Alert 
        className="alert alert-success"
        icon="bi bi-check-circle-fill me-2"
        message="Usuario registrado exitosamente!"/>
      )}

      {registerWarning && (
        <Alert 
        className="alert alert-warning"
        icon="bi bi-exclamation-circle-fill me-2"
        message="El usuario ingresado ya existe!"/>
      )}

      {registerError && (
        <Alert 
        className="alert alert-danger"
        icon="bi bi-x-circle-fill me-2"
        message="Error al registrar usuario"/>
      )}

      <div className="form-floating mb-1">
        <input 
        type="text" 
        maxLength="30"
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
        maxLength="30"
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
          id="signupemail" 
          placeholder="Correo electrónico" 
          onChange={handleEmailChange} 
          value={email}/>
          <label htmlFor="#signupemail">Correo electrónico</label>
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
          id="signuppassword" 
          placeholder="Contraseña" 
          onChange={handlePasswordChange}
          value={password}/>
          <label htmlFor="signuppassword">Contraseña</label>
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
          <label htmlFor="confirmPassword">Repetir contraseña</label>
        </div>         
      </div>
      <div className='d-flex flex-column mb-3'>      
        {!passwordsMatch && <span className='text-secondary'>Las contraseñas no coinciden.</span>}
        {passwordsMatch && <span className='text-secondary'>Las contraseñas coinciden.</span>}     
      </div>
      
      {hideButton && (
        <button type="submit" className="btn btn-secondary" disabled={!formValid}>{btn}</button>
      )}
    </form>
  )
}

export default SignupUser