import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = (props) => {
  return (
    <NavLink 
    to={props.link}
    type="button"
    className="btn btn-dark btn-sm rounded-0"
    activeClassName="active"
    data-bs-toggle={props.toggle}
    data-bs-target={props.target}
    aria-controls={props.controls}>
      {props.name}
    </NavLink>
  )
}

export default Button