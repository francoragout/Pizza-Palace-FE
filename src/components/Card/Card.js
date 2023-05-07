import React from 'react'

const Card = () => {
  
  return (
    <div class="card text-bg-dark" style={{width: "18rem", height: "26.5rem"}}>
      <img src="https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">Card title</h3>
        <p class="card-text">Some quick example text to buildasdasd</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-bg-dark"><h5><i class="bi bi-currency-dollar me-1"></i>1950</h5></li>
      </ul>
      <div class="card-body d-flex justify-content-center">
        <button type="button" class="btn btn-secondary">Añadir al carrito</button>
      </div>
    </div>
  )
}

export default Card
