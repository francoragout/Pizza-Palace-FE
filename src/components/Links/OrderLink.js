import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const OrderLink = (props) => {
  return (
    <li className="nav-item">
      <NavLink to="/order">
        <Button 
        className={props.className}
        name="Menú"
        icon="bi bi-journal"/>
      </NavLink>               
    </li>
  )
}

export default OrderLink