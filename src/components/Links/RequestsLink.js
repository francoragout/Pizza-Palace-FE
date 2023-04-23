import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const RequestsLink = (props) => {
  return (
    <li className="nav-item">
      <NavLink to="/requests">
        <Button 
        className={props.className}
        name="Pedidos"
        icon="bi bi-list-ul"/>
      </NavLink>               
    </li>
  )
}

export default RequestsLink