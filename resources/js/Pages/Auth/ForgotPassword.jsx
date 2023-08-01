import Hero from '@/Components/Hero'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const ForgotPassword = ({ status }) => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('password.email'));
  };

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
                  {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                  <form onSubmit={submit} id="contactForm">
                    <div class="row">
                      <div class="col-lg-12 ">
                        <div class="form-group">
                        <input value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" name="name" id="name" class="form-control" placeholder="Please enter your Email" />
                        <p style={{ color: 'red' }}>{errors.email}</p>
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