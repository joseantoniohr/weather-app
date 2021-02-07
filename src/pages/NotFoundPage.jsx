import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      NotFound
      <div>
        <Link to="/main">Volver a Main</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
