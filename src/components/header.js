import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div>
      <header className="header-section">
        <div className="container-fluid">
          <div className="inner-header">
            <div className="logo">
              <Link to="/"><img src="img/logo.png" alt="" /></Link>
            </div>
            <div className="header-right">
              <img src="img/icons/search.png" alt="" className="search-trigger" />
              <img src="img/icons/man.png" alt="" />
              <a href="#">
                <img src="img/icons/bag.png" alt="" />
                <span>2</span>
              </a>
            </div>
            <div className="user-access">
              <a href="#">Register</a>
              <a href="#" className="in">Sign in</a>
            </div>
            <nav className="main-menu mobile-menu">
              <ul>
                <li><Link className="active" href="/">Home</Link></li>
                <li>
                <Link to="/detail">Shop</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>

                <li><Link to="blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default header