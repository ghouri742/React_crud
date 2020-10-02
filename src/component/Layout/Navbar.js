import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar=()=>(

    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
  <a className="navbar-brand" href="#">React Users</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li >
        <NavLink className="nav-link" exact to="/">Home </NavLink>
      </li>
     
    <li >
    <NavLink className="nav-link"  exact to ="/about">About </NavLink>
  </li>
    <li >
    <NavLink className="nav-link"  exact to ="/contact">Contact </NavLink>
  </li>
    </ul>
    
  </div>

  <Link className="btn btn-outline-light" to="/user/add">Add User</Link>

  </div>
</nav>
    </div>
)

export default Navbar