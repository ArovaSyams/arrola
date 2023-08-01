import { Link } from '@inertiajs/react'
import React from 'react'

const Navbar = ({ auth }) => {
  return (
    <div className="navbar-area">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div className="mobile-responsive-menu">
            <div className="logo">
              <Link href="/">
                <img src="/assets/images/logo.png" className="logo-one" alt="Logo" />
                <img src="/assets/images/logo-white.png" className="logo-two" alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="desktop-nav nav-area">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light ">
            <Link className="navbar-brand" href="/">
              <img src="/assets/images/logo.png" className="logo-one" alt="Logo" />
              <img src="/assets/images/logo-white.png" className="logo-two" alt="Logo" />
            </Link>
            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">

              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Receipes
                  </Link>
                </li>
              </ul>

              <div className="others-options d-flex align-items-center">
                {auth ? (

                  <div className="optional-item">
                    <Link href={auth.role === 'admin' ? '/admin-dashboard' : '/dashboard'} className="default-btn two">Dashboard</Link>
                  </div>
                  
                ) : (
                  <>
                  <div className="optional-item">
                    <Link href="/login" className="default-btn two">Login</Link>
                  </div>
                  <div className="optional-item">
                    <Link href="/register" className="default-btn two">Register</Link>
                  </div>
                  </>
                )}
              </div>

              <div className="mobile-nav">
                <div className="mobile-other d-flex align-items-center">
                  <div className="optional-item">
                    <Link href="/register" className="default-btn two">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar