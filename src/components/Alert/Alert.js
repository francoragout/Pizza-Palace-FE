import React from 'react'

const Alert = (props) => {
  return (
    <div className={props.className} role="alert">
      <i className={props.icon}></i>{props.message}
    </div>
  )
}

export default Alert