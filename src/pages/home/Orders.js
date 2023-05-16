import React from 'react'
import Order from '../../components/Boards/Order';

const Orders = () => {
  const role = localStorage.getItem("role");
  if (role !== "user") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }

  return (
    <>
    <Order/>
    </>
  )
}

export default Orders