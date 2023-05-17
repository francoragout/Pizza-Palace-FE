import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link2 = (props) => {
  return (
    <NavLink to="/orders">
      <Button 
      className={props.className}
      name="Pedidos"/>
    </NavLink>               
  )
}

export default Link2