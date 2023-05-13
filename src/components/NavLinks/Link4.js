import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link4 = (props) => {
  return (
    <NavLink to="/menus">
      <Button 
      className={props.className}
      name="Menú"
      icon="bi bi-journal me-1"/>
    </NavLink> 
  )
}

export default Link4