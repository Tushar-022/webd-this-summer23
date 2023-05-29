import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-3">
  <a className="navbar-brand text-light " href="/"  >{props.title}</a>
  
  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item active px-3">
      <a className="nav-link text-light" href="/">Home</a>
    </li>
    <li className="nav-item px-3">
      <a className="nav-link text-light" href="/">About</a>
    </li>
    <li className="nav-item px-3">
      <a className="nav-link text-light" href="/">Pricing</a>
    </li>
  </ul>
</div>

</nav>
    </div>
  )
}
