import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link2 = (props) => {
  return (
    <li className="nav-item">
      <NavLink to="/status">
        <Button 
        className={props.className}
        name="Pedidos"
        icon="bi bi-list-ul"/>
      </NavLink>               
    </li>   
  )
}

export default Link2