import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link4 = (props) => {
  return (
    <NavLink to="/menu">
      <Button 
      className={props.className}
      name="Menú"
      icon="bi bi-journal"/>
    </NavLink> 
  )
}

export default Link4