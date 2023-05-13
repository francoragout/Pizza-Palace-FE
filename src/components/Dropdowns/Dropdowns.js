import React from 'react'

const Dropdowns = (props) => {
  const logout = () => {
    if (
      window.confirm("¿Estás seguro que quieres cerrar la sesión?")
    ) {
      window.location.href = "/";
    }
  }

  const userId = JSON.parse(localStorage.getItem("user"));
  const user = userId.email

  return (
    <li className='nav-item'>
      <div className="dropdown">
        <a className="btn btn-dark dropdown-toggle rounded-0" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-gear me-1"> </i>
        </a>
        <ul className="dropdown-menu mt-2 rounded-0 text-center dropdown-menu-end">
          <li><h6>{props.account}</h6></li>
          <li><p className='text-light m-2'>{user}</p></li>
          <li><button className="dropdown-item text-light" onClick={logout}>Cerrar sesión</button></li>
        </ul>
      </div>
    </li>
  )
}

export default Dropdowns