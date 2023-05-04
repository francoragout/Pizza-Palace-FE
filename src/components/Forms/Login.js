import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Alert from '../Alert/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailValid(event.target.value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/));
  }

  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const [formValid, setFormValid] = useState(false);
  const isFormValid = emailValid && password;
  if (formValid !== isFormValid) {
    setFormValid(isFormValid);
  }
  
  const [loginWarning, setLoginWarning] = useState(false);
  const [loginMessage, setLoginMessage] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users/login-user', {
        email,
        password,
      });
      console.log(response);
      
      const json = response.data;
      if (json.user.role === "admin") {
        localStorage.setItem("access-token", json.token);
        localStorage.setItem("role", json.user.role);
        window.location.href = "/requests";
      } else if (json.user.role === "user") {
        localStorage.setItem("access-token", json.token);
        localStorage.setItem("role", json.user.role);
        localStorage.setItem("user", JSON.stringify(json.user));
        window.location.href = "/order";
      }

      setLoginError(false)
      setLoginWarning(false)
      setLoginMessage(false)

    } catch (error) {
      if (error.response.status === 401) {
        setLoginError(false)
        setLoginWarning(true)
        setLoginMessage(false)

      } else if (error.response.status === 403) {
        setLoginMessage(true)
        setLoginError(false)
        setLoginWarning(false)

      } else {
        setLoginError(true)
        setLoginMessage(false)
        setLoginWarning(false)
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>

      {loginWarning && (
        <Alert 
        className="alert alert-warning"
        icon="bi bi-exclamation-circle-fill me-2"
        message="Los datos son incorrectos"/>
      )}

      {loginMessage && (
        <Alert 
        className="alert alert-warning"
        icon="bi bi-pause-circle-fill me-2"
        message="Usuario inactivo"/>
      )}

      {loginError && (
        <Alert 
        className="alert alert-danger"
        icon="bi bi-x-circle-fill me-2"
        message="Error al loguear usuario"/>
      )}

      <div className="input-group mb-3">
        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
        <div className="form-floating">
          <input 
          type="email" 
          maxLength="40"
          className="form-control" 
          id="loginemail" 
          placeholder="Correo electrónico" 
          onChange={handleEmailChange} 
          value={email}/>
          <label htmlFor="loginemail">Correo electrónico</label>
        </div>
      </div>
      
      <div className="input-group mb-3">
        <span className="input-group-text"><i className="bi bi-key"></i></span>
        <div className="form-floating">
          <input 
          type="password" 
          maxLength="30"
          className="form-control" 
          id="loginpassword" 
          placeholder="Contraseña" 
          onChange={handlePasswordChange} 
          value={password}/>
          <label htmlFor="loginpassword">Contraseña</label>
        </div>
      </div>
      
      <button type="submit" className="btn btn-secondary"  disabled={!formValid}>Iniciar sesión</button>
    </form>
  )
}

export default Login