import React from 'react'

const Order = () => {
  const role = localStorage.getItem("role");
  if (role !== "user") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }

  
  
  return (
    <>
    
    </>
  )
}

export default Order