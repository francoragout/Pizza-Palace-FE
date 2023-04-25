import React from 'react'

const Button = (props) => {
  return (
    <button 
    type="button"
    className={props.className}
    data-bs-toggle={props.toggle}
    data-bs-target={props.target}
    aria-controls={props.controls}>
      <i className={props.icon}></i> {props.name} 
    </button>
  )
}

export default Button