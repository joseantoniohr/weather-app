import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div>
      Welcome
      <div>
        <Link to="/main">Ir a Main</Link>
      </div>
    </div>
  )
}

export default WelcomePage
