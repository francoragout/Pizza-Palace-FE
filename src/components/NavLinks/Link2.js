import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link2 = (props) => {
  return (
    <NavLink to="/status">
      <Button 
      className={props.className}
      name="Pedidos"
      icon="bi bi-list-ul"/>
    </NavLink>               
  )
}

export default Link2