import React from 'react'
import Accordion from '../Accordion/Accordion'
import { useLocation } from 'react-router-dom';
import SignupAdmin from '../Forms/SignupAdmin';
import CreateMenu from '../Forms/CreateMenu';
import CreateRequest from '../Forms/CreateRequest';

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
          {location.pathname === '/home' && (
            <CreateRequest />
          )}     
          {location.pathname === '/orders' && (
            <CreateRequest />
          )}     
          {location.pathname === '/menus' && (
            <CreateMenu />
          )}  
          {location.pathname === '/users' && (
            <SignupAdmin />
          )}   
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Modal