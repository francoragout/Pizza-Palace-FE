import React from 'react'
import Category1 from '../../components/Cards/Category1';


const Order = () => {
  const role = localStorage.getItem("role");
  if (role !== "user") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }

  return (
    <>
    <Category1 />
    </>
  )
}

export default Order