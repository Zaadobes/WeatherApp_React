import React from 'react'

const Error = ({errorMessage,display}) => {
  return (
    <div className={display?"errorShow" : "error"}>
    <p>{errorMessage}</p>
    </div>
  )
}

export default Error
