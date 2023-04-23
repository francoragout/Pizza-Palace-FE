import React from 'react'

const Button = (props) => {
  return (
    <li className='nav-item'>
      <button 
      type="button"
      className={props.className}
      data-bs-toggle={props.toggle}
      data-bs-target={props.target}
      aria-controls={props.controls}>
        <i className={props.icon}></i> {props.name} 
      </button>
    </li>
  )
}

export default Button