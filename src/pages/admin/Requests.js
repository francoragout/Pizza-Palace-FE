import React from 'react'
import Request from '../../components/Boards/Request';

const Requests = () => {
  const role = localStorage.getItem("role");
  if (role !== "admin") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }
  return (
    <>
    <Request />
    
    </>
    
  )
}

export default Requests