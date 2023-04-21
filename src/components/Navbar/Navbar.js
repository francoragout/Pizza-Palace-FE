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
    <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href={location.pathname}>Pizza Palace</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {location.pathname === '/' && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Button 
                className="btn btn-dark rounded-0"
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
                <NavLink to="/order">
                  <Button 
                  className="btn btn-dark rounded-0 active"
                  name="Menú"
                  icon="bi bi-journal"/>
                </NavLink>               
              </li>
              <li className="nav-item">
                <NavLink to="/state">
                  <Button 
                  className="btn btn-dark rounded-0"
                  name="Pedidos"
                  icon="bi bi-list-ul"/>
                </NavLink>               
              </li>          
              <li className="nav-item">
                <Button 
                className="btn btn-dark rounded-0"
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
          {location.pathname === '/state' && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/order">
                  <Button 
                  className="btn btn-dark rounded-0"
                  name="Menú"
                  icon="bi bi-journal"/>
                </NavLink>               
              </li>
              <li className="nav-item">
                <NavLink to="/state">
                  <Button 
                  className="btn btn-dark rounded-0 active"
                  name="Pedidos"
                  icon="bi bi-list-ul"/>
                </NavLink>               
              </li>          
              <li className="nav-item">
                <Button 
                className="btn btn-dark rounded-0"
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
          {location.pathname === '/requests' && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/requests">
                  <Button 
                  className="btn btn-dark rounded-0 active"
                  name="Pedidos"
                  icon="bi bi-list-ul"/>
                </NavLink>               
              </li>
              <li className="nav-item">
                <NavLink to="/menu">
                  <Button 
                  className="btn btn-dark rounded-0"
                  name="Menú"
                  icon="bi bi-journal"/>
                </NavLink>               
              </li>
              <li className="nav-item">
                <NavLink to="/users">
                  <Button 
                  className="btn btn-dark rounded-0"
                  name="Usuarios"
                  icon="bi bi-person"/>
                </NavLink>               
              </li>                          
              <li className="nav-item">
                <Dropdowns account="Admin account"/>    
              </li>
            </ul>                    
          )}
          {location.pathname === '/menu' && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/requests">
                  <Button 
                  className="btn btn-dark rounded-0"
                  name="Pedidos"
                  icon="bi bi-list-ul"/>
                </NavLink>               
              </li>
              <li className="nav-item">
                <NavLink to="/menu">
                  <Button 
                  className="btn btn-dark rounded-0 active"
                  name="Menú"
                  icon="bi bi-journal"/>
                </NavLink>               
              </li>
              <li className="nav-item">
                <NavLink to="/users">
                  <Button 
                  className="btn btn-dark rounded-0"
                  name="Usuarios"
                  icon="bi bi-person"/>
                </NavLink>               
              </li>                          
              <li className="nav-item">
                <Dropdowns account="Admin account"/>    
              </li>
            </ul>                    
          )}
          {location.pathname === '/users' && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/requests">
                  <Button 
                  className="btn btn-dark rounded-0"
                  name="Pedidos"
                  icon="bi bi-list-ul"/>
                </NavLink>               
              </li>
              <li className="nav-item">
                <NavLink to="/menu">
                  <Button 
                  className="btn btn-dark rounded-0"
                  name="Menú"
                  icon="bi bi-journal"/>
                </NavLink>               
              </li>
              <li className="nav-item">
                <NavLink to="/users">
                  <Button 
                  className="btn btn-dark rounded-0 active"
                  name="Usuarios"
                  icon="bi bi-person"/>
                </NavLink>               
              </li>                          
              <li className="nav-item">
                <Dropdowns account="Admin account"/>    
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