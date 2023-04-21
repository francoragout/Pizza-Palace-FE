import React from 'react'

const Button = (props) => {
  return (
    <button 
    type="button"
    className="btn btn-dark rounded-0"
    data-bs-toggle={props.toggle}
    data-bs-target={props.target}
    aria-controls={props.controls}>
      <i class={props.icon}></i> {props.name} 
    </button>
  )
}

export default Button