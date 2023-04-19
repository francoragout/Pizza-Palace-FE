import React from 'react'

const Dropdowns = (props) => {
  const logout = () => {
    if (
      window.confirm("¿Estás seguro que quieres cerrar la sesión?")
    ) {
      window.location.href = "/";
    }
  }

  return (
    <div class="dropdown">
      <a class="btn btn-dark dropdown-toggle rounded-0" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-gear-fill"> </i>
      </a>
      <ul class="dropdown-menu mt-2 rounded-0 text-center">
        <li><h6>{props.account}</h6></li>
        <li><button class="dropdown-item text-light btn" onClick={logout}>Cerrar Sesión</button></li>
      </ul>
    </div>
  )
}

export default Dropdowns