import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-area footer-area-bg">
      <div className="container">
        <div className="footer-top pt-100 pb-70">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="assets/images/footer-logo.png" alt="Images" />
                  </a>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua quis ipsum suspendisse.
                </p>
                <ul className="social-link">
                  <li>
                    <Link href="" target="_blank">
                      <i className='bx bxl-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                      <i className='bx bxl-linkedin'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                      <i className='bx bxl-pinterest-alt'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                      <i className='bx bxl-instagram'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget ps-5">
                <h3>Useful Links</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="" target="_blank">
                    Home
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                    About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                    Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                    Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                    Terms & Condition
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget ps-5">
                <h3>Information</h3>
                <ul className="footer-contact">
                  <li>
                  Phone:
                    <span>
                    <a href="tel:+8245678924">+8245678924</a><br />
                    <a href="tel:+8245668964">+8245668964</a>
                    </span>
                  </li>
                  <li>
                  Email:
                    <span>
                    <a href="">demo@demo.com</a><br />
                    <a href="">demo@demo.com</a>
                    </span>
                  </li>
                  <li>
                  Address:
                    <span>
                    5ut, Stamford South,<br />
                    New Zeland
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget ps-5">
                <h3>Newsletter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className="newsletter-area">
                  <form className="newsletter-form" data-toggle="validator" method="POST">
                    <input type="email" className="form-control" placeholder="Enter Your Email" name="EMAIL" required autoComplete="off" />
                      <button className="subscribe-btn" type="submit">
                      Subscribe
                      </button>
                    <div id="validator-newsletter" className="form-result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copy-right-text text-center">
            <p>
            Copyright @ Arrola. All Rights Reserved by
            <a href="" target="_blank">HiBootstrap</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer