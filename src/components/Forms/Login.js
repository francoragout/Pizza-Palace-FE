import React from 'react'

const Login = () => {
  return (
    <>
    <form>
    <div className="input-group mb-3">
        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
        <div className="form-floating">
          <input 
          type="email" 
          maxLength="40"
          className="form-control" 
          id="email" 
          placeholder="Correo electrónico" 
          
          />
          <label htmlFor="email">Correo electrónico</label>
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text"><i className="bi bi-key"></i></span>
        <div className="form-floating">
          <input 
          type="password" 
          maxLength="30" 
          className="form-control" 
          id="password" 
          placeholder="Contraseña" 
          
          />
          <label htmlFor="password">Contraseña</label>
        </div>         
      </div>

      <button type="submit" className="btn btn-secondary">Iniciar sesión</button>
      
      

    </form>
    </>
    
  )
}

export default Login