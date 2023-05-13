import React from 'react'

const Menus = () => {
  const role = localStorage.getItem("role");
  if (role !== "admin") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }
  return (
    <div>Menus</div>
  )
}

export default Menus