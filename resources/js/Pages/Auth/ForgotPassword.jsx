import Hero from '@/Components/Hero'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const ForgotPassword = () => {
  return (
    <GuestLayout>
      <Head title="Forgot password" />
      <Hero title="Forgot Password" />

      <div class="user-area pt-100 pb-70">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="user-all-form">
                <div class="contact-form">
                  <h3 class="text-center">Forgot Password</h3>
                  <form id="contactForm">
                    <div class="row">
                      <div class="col-lg-12 ">
                        <div class="form-group">
                        <input type="text" name="name" id="name" class="form-control" placeholder="Please enter your Email" />
                        </div>
                        </div>
                        <div class="col-lg-12 col-md-12 text-center">
                        <button type="submit" class="default-btn">
                        Reset Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </GuestLayout>
  )
}

export default ForgotPassword