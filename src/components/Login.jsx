import React from 'react'
import "../styles/mapComponent.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mapComponentContainer'>
      This feature is coming soon! Stay tuned!
      <Link to={'/'}>
            <button className='backToExploreBtn'>
              <h3> Explore all properties</h3>
            </button>
          </Link>
    </div>
  )
}

export default Login
