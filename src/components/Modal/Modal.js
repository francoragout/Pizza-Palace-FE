import React from 'react'
import Accordion from '../Accordion/Accordion'

const Modal = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">         
          <div className="modal-body">          
            <Accordion />
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Modal