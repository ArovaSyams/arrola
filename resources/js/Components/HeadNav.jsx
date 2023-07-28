import { Link } from '@inertiajs/react'
import React from 'react'

const HeadNav = () => {
  return (
    <header className="top-header top-header-bg-two">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-3 col-md-4">
            <div className="header-left">
              <p>Welcome!</p>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="header-right d-flex align-items-center">
              <div className="header-item">
                <ul>
                  <li className="title">Follow us :</li>
                  <li>
                    <Link href="#" target="_blank">
                      <i className='bx bxl-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      <i className='bx bxl-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      <i className='bx bxl-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" target="_blank">
                      <i className='bx bxl-youtube'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeadNav