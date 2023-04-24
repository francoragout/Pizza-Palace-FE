import React from 'react'
import { useForm } from 'react-hook-form'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit()}>

      <div class="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Nombre" minLength="2" maxLength="20" 
        {...register('name', { required: true })} />
        <label>Nombre</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Apellido" minLength="2" maxLength="20" 
        {...register('lastname', { required: true })} />
        <label>Apellido</label>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text"><i class="bi bi-envelope"></i></span>
        <div class="form-floating">
          <input type="email" class="form-control" placeholder="Correo electrónico" minLength="4" maxLength="30" 
          {...register('email', { required: true })} />
          <label>Correo electrónico</label>
        </div>
        {errors.eamil && (
          <span className='text-secondary'>
            El mail ingresado ya existe
          </span>
        )}
      </div>  

      <div class="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Dirección" minLength="4" maxLength="30" 
        {...register('address', { required: true })} />
        <label>Dirección</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" className="form-control" placeholder="Número de telefono" min="10000000"
        max="999999999999"  
        {...register('phone', { required: true })} />
        <label>Número de telefono</label>
      </div>

      <div class="input-group mb-3">   
        <span class="input-group-text"><i class="bi bi-question-circle"></i></span>
        <div class="form-floating">
          <input type="password" class="form-control" placeholder="Contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,16}$"
          {...register('password', { required: true })} />
          <label>Contraseña</label>
        </div>
      </div>  

      <button type="submit" class="btn btn-secondary">Registrarse</button>




      
      
      

    </form>
  )
}

export default Signup