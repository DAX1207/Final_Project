import React from 'react'
import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
    <div>
      <h1>You are not authorized to visit this page</h1>
      <br />
      <p>please login first</p>
      <Link to={"/"}>
        <button>Login</button>
      </Link>
    </div>
  )
}

export default NotAuthorized