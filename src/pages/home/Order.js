import React from 'react'
import Category1 from '../../components/Cards/Category1';
import Category2 from '../../components/Cards/Category2';
import Category3 from '../../components/Cards/Category3';

const Order = () => {
  const role = localStorage.getItem("role");
  if (role !== "user") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }

  return (
    <>
    <Category1 />
    <Category2 />
    <Category3 />
    </>
  )
}

export default Order