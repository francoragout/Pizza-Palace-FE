import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link3 = (props) => {
  return (
    <NavLink to="/requests">
      <Button 
      className={props.className}
      name="Pedidos"
      icon="bi bi-list-ul me-1"/>
    </NavLink>               
  )
}

export default Link3