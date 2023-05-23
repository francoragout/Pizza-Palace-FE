import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark mt-auto row m-0 p-0'>
      <div className='col-lg-3 col-md-6 my-auto'>
        <div className='d-flex justify-content-center pt-2'>
          <a className="text-light p-2" href="https://www.facebook.com/"><h2><i className="bi bi-facebook"></i></h2></a>
          <a className="text-light p-2" href="https://www.instagram.com/"><h2><i className="bi bi-instagram"></i></h2></a>
          <a className="text-light p-2" href="https://wa.me/543815553413"><h2><i className="bi bi-whatsapp"></i></h2></a> 
        </div>
      </div>
      <div className='col-lg-3 col-md-6 text-light my-auto'>
        <p className='text-center pt-2'>Direccion: Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán.</p>
      </div>
      <div className='col-lg-3 col-md-6 text-light my-auto'>
        <h5 className='text-center pt-2'><b>P i z z a P a l a c e</b></h5>
        <p className='text-light col-md-6 text-center mx-auto'><i className="bi bi-r-circle me-1"></i>Todos los derechos reservados</p>
      </div>
      <div className='col-lg-3 col-md-6 text-light my-auto'>
        <p className='text-center pt-2'>Horarios de atencion: De lunes a sábados de 20:00 a 00:00 hs.</p>
      </div>
    </div>
  )
}

export default Footer