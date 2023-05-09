import React from 'react'

const Card = ({menu}) => {
  
  return (
    <div class="card text-bg-dark" style={{width: "18rem"}}>
      <div class="card-header text-secondary">{menu.category}</div>
      <div class="card-body">
        <h4 class="card-title">{menu.name}</h4>
        <p class="card-text text-warning" style={{height: "3rem"}}>{menu.description}</p>    
        <h5><i class="bi bi-currency-dollar me-1"></i>{menu.price}</h5>
        <button type="button" class="btn btn-sm btn-secondary mt-2">Añadir al carrito<i class="bi bi-cart4 ms-2"></i></button>
      </div>
    </div>
  )
}

export default Card
