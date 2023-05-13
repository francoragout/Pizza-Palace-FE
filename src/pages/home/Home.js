import React from 'react'
import Scrollspy from '../../components/Scrollspy/Scrollspy';

const Home = () => {
  const role = localStorage.getItem("role");
  if (role !== "user") {
  alert("No tienes autorización para ingresar a esta página");
  window.location.href = "/";
  }

  return (
    <>
    <Scrollspy />
    </>
  )
}

export default Home