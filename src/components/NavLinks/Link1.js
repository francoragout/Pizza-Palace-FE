import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link1 = (props) => {
  return (
    <NavLink to="/home">
      <Button 
      className={props.className}
      name="Menú"
      icon="bi bi-journal me-1"/>
    </NavLink>               
  )
}

export default Link1