import React from 'react'

const Card = ({menu, className, size}) => {
  
  return (
    <div className="card text-bg-dark" style={{width: "18rem"}}>
      <div className="card-header text-secondary">{menu.category}</div>
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <h4 className="card-title">{menu.name}</h4>
          <h4><i className="bi bi-arrow-down-circle-fill"></i></h4>
        </div>
        <p className={className} style={{height: "2.5rem"}}>{menu.description}</p>
        <p className='text-secondary' style={{height: "1rem"}}>{size}</p>     
        <h5><i className="bi bi-currency-dollar me-1"></i>{menu.price}</h5>
        <div className='d-flex justify-content-end'>
        <button type="button" className="btn btn-sm btn-secondary mt-2">Añadir al carrito<i className="bi bi-cart4 ms-2"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Card
