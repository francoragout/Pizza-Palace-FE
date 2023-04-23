import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Dropdowns from '../Dropdowns/Dropdowns';
import Offcanvas from '../Offcanvas/Offcanvas';
import RequestsLink from '../Links/RequestsLink';
import MenuLink from '../Links/MenuLink';
import UsersLink from '../Links/UsersLink';
import OrderLink from '../Links/OrderLink';
import StatusLink from '../Links/StatusLink';


const Navbar = () => {
  const location = useLocation();
  
  return (
    <>
    <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href={location.pathname}>Pizza Palace</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {location.pathname === '/' && (
            <ul className="navbar-nav ms-auto">            
              <Button className="btn btn-dark rounded-0" name="Ingresar" icon="bi bi-box-arrow-in-right" toggle="modal" target="#exampleModal"/>            
            </ul>           
          )}
          {location.pathname === '/order' && (
            <ul className="navbar-nav ms-auto">
              <OrderLink className="btn btn-dark rounded-0 active"/>
              <StatusLink className="btn btn-dark rounded-0"/>                   
              <Button className="btn btn-dark rounded-0" name="Carrito" icon="bi bi-cart" toggle="offcanvas" target="#offcanvasRight" controls="offcanvasRight"/>           
              <Dropdowns account="User account"/>            
            </ul>                    
          )}
          {location.pathname === '/status' && (
            <ul className="navbar-nav ms-auto">
              <OrderLink className="btn btn-dark rounded-0"/>
              <StatusLink className="btn btn-dark rounded-0 active"/>                   
              <Button className="btn btn-dark rounded-0" name="Carrito" icon="bi bi-cart" toggle="offcanvas" target="#offcanvasRight" controls="offcanvasRight"/>           
              <Dropdowns account="User account"/>             
            </ul>                    
          )}
          {location.pathname === '/requests' && (
            <ul className="navbar-nav ms-auto">
              <RequestsLink className="btn btn-dark rounded-0 active"/>
              <MenuLink className="btn btn-dark rounded-0"/>
              <UsersLink className="btn btn-dark rounded-0"/>
              <Dropdowns account="Admin account"/>
            </ul>
          )}
          {location.pathname === '/menu' && (
            <ul className="navbar-nav ms-auto">
              <RequestsLink className="btn btn-dark rounded-0"/>
              <MenuLink className="btn btn-dark rounded-0 active"/>
              <UsersLink className="btn btn-dark rounded-0"/>
              <Dropdowns account="Admin account"/>
            </ul>                    
          )}
          {location.pathname === '/users' && (
            <ul className="navbar-nav ms-auto">
              <RequestsLink className="btn btn-dark rounded-0"/>
              <MenuLink className="btn btn-dark rounded-0"/>
              <UsersLink className="btn btn-dark rounded-0 active"/>
              <Dropdowns account="Admin account"/>
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