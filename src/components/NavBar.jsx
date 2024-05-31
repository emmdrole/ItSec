import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <nav className='nav-container'>
    <ul className="list-container">
        {/* <li className="navBar-Item">
            <Link to='/'>BruteForce</Link>
        </li> */}
        <li className="navBar-Item">
            <Link to='/sql'>Sql Injection</Link>
        </li>
        {/* <li className="navBar-Item">
            <Link to='/fileinclusion'>File Inclusion</Link>
        </li> */}
        <li className="navBar-Item">
            <Link to='/xss'>Xss</Link>
        </li>
    </ul>
   </nav> 
  )
}

export default NavBar