import React from 'react'
import Menu from '../../components/Boards/Menu';

const Menus = () => {
  const role = localStorage.getItem("role");
  if (role !== "admin") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }
  return (
    <>
    <Menu />
    </>
  )
}

export default Menus