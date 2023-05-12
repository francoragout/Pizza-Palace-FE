import React from 'react'
import Cart from '../Cart/Cart'

const Offcanvas = () => {
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header text-bg-dark">
        <h6 className="offcanvas-title" id="offcanvasRightLabel">Menú seleccionado</h6>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <Cart />
      </div>
    </div>
  )
}

export default Offcanvas