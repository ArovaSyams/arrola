import Hero from '@/Components/Hero';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react'

const ResetPassword = ({ token, email }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('password.store'));
  };

  return (
    <GuestLayout>
      <Head title="Reset Password" />
      <Hero title="Reset Password" />

      <div class="user-area pt-100 pb-70">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="user-all-form">
                <div class="contact-form">
                  <h3>Log In</h3>
                  <form onSubmit={submit} id="contactForm">                    
                    <div class="row">
                      <div class="col-lg-12 ">
                        <div class="form-group">
                        <input value={data.email} onChange={(e) => setData('email', e.target.value)} type="text" name="email" id="email" class="form-control" placeholder="Email" />
                        <p style={{ color: 'red' }}>{errors.email}</p>
                        </div>
                      </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input value={data.password} onChange={(e) => setData('password', e.target.value)} class="form-control" type="password" name="password" placeholder="Password" />
                        <p style={{ color: 'red' }}>{errors.password}</p>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} class="form-control" type="password" name="password" placeholder="Password Confirmation" />
                        <p style={{ color: 'red' }}>{errors.password}</p>
                      </div>
                    </div>
                    

                    <div class="col-lg-12 col-md-12 text-center">
                      <button type="submit" class="default-btn">
                      Reset Password
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

export default ResetPassword