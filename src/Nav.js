import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (

            <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

 <Link className="navbar-brand" to="/">Logo</Link>

  <ul className="navbar-nav">
    <li className="nav-item">
     <Link className="nav-link" to="/">Link 1</Link>
    </li>
    <li className="nav-item">
     <Link className="nav-link" to="/">Link 2</Link>
    </li>

   
   
  </ul>
</nav>

            </>

    )
}

export default Nav
