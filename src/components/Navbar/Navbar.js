import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Dropdowns from '../Dropdowns/Dropdowns';
import Offcanvas from '../Offcanvas/Offcanvas';
import Link1 from '../NavLinks/Link1';
import Link2 from '../NavLinks/Link2';
import Link3 from '../NavLinks/Link3';
import Link4 from '../NavLinks/Link4';
import Link5 from '../NavLinks/Link5';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <>
    <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {location.pathname === '/' && (
            <ul className="navbar-nav ms-auto">            
              <Button className="btn btn-dark rounded-0" name="Ingresar" icon="bi bi-box-arrow-in-right me-1" toggle="modal" target="#exampleModal"/>            
            </ul>           
          )}
          {location.pathname === '/order' && (
            <ul className="navbar-nav ms-auto">
              <Link1 className="btn btn-dark rounded-0 active"/>
              <Link2 className="btn btn-dark rounded-0"/>                   
              <Button className="btn btn-dark rounded-0" name="Carrito" icon="bi bi-cart4 me-1" toggle="offcanvas" target="#offcanvasRight" controls="offcanvasRight"/>           
              <Dropdowns account="User account"/>            
            </ul>                    
          )}
          {location.pathname === '/status' && (
            <ul className="navbar-nav ms-auto">
              <Link1 className="btn btn-dark rounded-0"/>
              <Link2 className="btn btn-dark rounded-0 active"/>                   
              <Button className="btn btn-dark rounded-0" name="Carrito" icon="bi bi-cart4 me-1" toggle="offcanvas" target="#offcanvasRight" controls="offcanvasRight"/>           
              <Dropdowns account="User account"/>             
            </ul>                    
          )}
          {location.pathname === '/requests' && (
            <ul className="navbar-nav ms-auto">
              <Link3 className="btn btn-dark rounded-0 active"/>
              <Link4 className="btn btn-dark rounded-0"/>
              <Link5 className="btn btn-dark rounded-0"/>
              <Dropdowns account="Admin account"/>
            </ul>
          )}
          {location.pathname === '/menu' && (
            <ul className="navbar-nav ms-auto">
              <Link3 className="btn btn-dark rounded-0"/>
              <Link4 className="btn btn-dark rounded-0 active"/>
              <Link5 className="btn btn-dark rounded-0"/>
              <Dropdowns account="Admin account"/>
            </ul>                    
          )}
          {location.pathname === '/users' && (
            <ul className="navbar-nav ms-auto">
              <Link3 className="btn btn-dark rounded-0"/>
              <Link4 className="btn btn-dark rounded-0"/>
              <Link5 className="btn btn-dark rounded-0 active"/>
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