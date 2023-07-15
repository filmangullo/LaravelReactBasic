import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
  return (
    <div className="flex">
        <div>
            <NavLink to='/'>Home</NavLink>
        </div>
        <div>
            <NavLink to='/login'>Login</NavLink>
        </div>
        <div>
            <NavLink to='/register'>Register</NavLink>
        </div>
    </div>
  )
}

export default NavbarComponent
