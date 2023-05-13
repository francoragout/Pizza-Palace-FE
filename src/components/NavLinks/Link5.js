import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link5 = (props) => {
  return (
    <NavLink to="/users">
      <Button 
      className={props.className}
      name="Usuarios"
      icon="bi bi-person me-1"/>
    </NavLink>
  )
}

export default Link5