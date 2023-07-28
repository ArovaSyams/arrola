import Footer from '@/Components/Footer'
import HeadNav from '@/Components/HeadNav'
import Navbar from '@/Components/Navbar'
import React from 'react'
import { Helmet } from 'react-helmet'

const GuestLayout = ({ children }) => {
  return (
    <body>
      {/* <div class="preloader">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div> */}

      <HeadNav />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />

      <Helmet>
      <script src="/assets/js/jquery.min.js"></script>

      <script src="/assets/js/bootstrap.bundle.min.js"></script>

      <script src="/assets/js/magnific-popup.min.js"></script>

      <script src="/assets/js/odometer.min.js"></script>

      <script src="/assets/js/appear.min.js"></script>

      <script src="/assets/js/meanmenu.min.js"></script>

      <script src="/assets/js/owl.carousel.min.js"></script>

      <script src="/assets/js/wow.min.js"></script>

      <script src="/assets/js/jquery-ui.min.js"></script>

      <script src="/assets/js/ajaxchimp.min.js"></script>

      <script src="/assets/js/form-validator.min.js"></script>

      <script src="/assets/js/contact-form-script.js"></script>

      <script src="/assets/js/custom.js"></script>
      </Helmet>
    </body>
  )
}

export default GuestLayout