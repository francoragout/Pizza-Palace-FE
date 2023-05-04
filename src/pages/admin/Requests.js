import React from 'react'

const Requests = () => {
  const role = localStorage.getItem("role");
  if (role !== "admin") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }
  return (
    <>
    
    </>
    
  )
}

export default Requests