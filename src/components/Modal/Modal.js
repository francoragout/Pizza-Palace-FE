import React from 'react'
import Accordion from '../Accordion/Accordion'
import { useLocation } from 'react-router-dom';
import Buy from '../Buy/Buy';

const Modal = () => {
  const location = useLocation();

  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">         
          <div className="modal-body"> 
          {location.pathname === '/' && (
            <Accordion />
          )} 
          {location.pathname === '/order' && (
            <Buy />
          )}     
          {location.pathname === '/status' && (
            <Buy />
          )}     
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Modal