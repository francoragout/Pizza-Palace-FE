import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';



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
          {location.pathname === '/' && (
            
            <Button />

          )}
          

          

            
            
           
          
        </div>
      </div>
    </nav>
    
    
    
    
  )
}

export default Navbar