import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Card = ({menu, description}) => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/order') {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [location])

  return (
    <div className="card text-bg-dark" style={{width: "18rem"}}>
      <div className="card-header text-secondary">{menu.category}</div>
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <h4 className="card-title">{menu.name}</h4>
          <h4><i className="bi bi-arrow-down-circle-fill"></i></h4>
        </div>
        <p className={description} style={{height: "2.1rem"}}>{menu.description}</p>
        <div className='d-flex justify-content-between'>
          <p className='text-secondary' style={{height: "1rem"}}>{menu.size}</p>     
          <h5><i className="bi bi-currency-dollar me-1"></i>{menu.price}</h5>
        </div>
        {showButton && <button type="button" className="btn btn-sm btn-secondary mt-2">Añadir al carrito<i className="bi bi-cart4 ms-2"></i></button>}
      </div>
    </div>
  )
}

export default Card
