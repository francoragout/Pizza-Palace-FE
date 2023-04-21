import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Dropdowns from '../Dropdowns/Dropdowns';
import Offcanvas from '../Offcanvas/Offcanvas';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <>
    <nav class="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href={location.pathname}>Pizza Palace</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          {location.pathname === '/' && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Button 
                name="Ingresar"
                icon="bi bi-box-arrow-in-right"
                toggle="modal"
                target="#exampleModal"
                />
              </li>
            </ul>           
          )}
          {location.pathname === '/order' && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/state">
                  <Button 
                  name="Pedidos"
                  icon="bi bi-list-ul"/>
                </NavLink>               
              </li>
             

              <li className="nav-item">
                <Button 
                name="Carrito"
                icon="bi bi-cart"
                toggle="offcanvas"
                target="#offcanvasRight"
                controls="offcanvasRight"/>   
              </li>
              <li className="nav-item">
                <Dropdowns account="User account"/>    
              </li>
            </ul>                    
          )}
          
          
          
          

        </div>
      </div>
    </nav>
    <Modal />
    <Offcanvas />
    </>
  )
}

export default Navbar