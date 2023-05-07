import React from 'react'
import Card from '../../components/Card/Card';

const Order = () => {
  const role = localStorage.getItem("role");
  if (role !== "user") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }

  return (
    <>
    <Card />
    </>
  )
}

export default Order