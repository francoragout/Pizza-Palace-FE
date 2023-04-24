import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Link5 = (props) => {
  return (
    <li className="nav-item">
      <NavLink to="/users">
        <Button 
        className={props.className}
        name="Usuarios"
        icon="bi bi-person"/>
      </NavLink>               
    </li>
  )
}

export default Link5