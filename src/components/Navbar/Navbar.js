import React from 'react'
import { Link, useLocation } from 'react-router-dom';



const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav class="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Pizza Palace</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {location.pathname === '/' && (
              <li class="nav-item">
                <button type="button" class="btn btn-secondary btn-sm">Small button</button>
              </li>
            )}
            {location.pathname === '/menu' && (
              <ul class="navbar-nav">
                <li class="nav-item">
                <button type="button" class="btn btn-dark btn-sm rounded-0">Pedidos</button>

                </li>
                <li>
                <button type="button" class="btn btn-dark btn-sm rounded-0">Usuarios</button>
                  
                </li>
                <li>
                <button type="button" class="btn btn-dark btn-sm rounded-0">Menu</button>
                  
                </li>

              </ul>
              
              
            )}

            
            
           
          </ul>
        </div>
      </div>
    </nav>
    
    
    
    
  )
}

export default Navbar