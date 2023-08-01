import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Hero from '@/Components/Hero';

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
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

    post(route('register'));
  };

  return (
    <GuestLayout>
      <Head title="Register" />
      <Hero title="Register" />

      <div className="user-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="user-all-form">
                <div className="contact-form">
                  <h3>Create an Account!</h3>

                  <form onSubmit={submit} id="contactForm">
                    <div className="row">
                      <div className="col-lg-12 ">
                        <div className="form-group">
                          <input value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} type="text" name="fname" id="fname" className="form-control" required placeholder="First Name" />
                          <p style={{ color: 'red' }}>{errors.first_name}</p>
                        </div>
                      </div>
                      <div className="col-lg-12 ">
                        <div className="form-group">
                          <input value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} type="text" name="lname" id="lname" className="form-control" required placeholder="Last Name" />
                          <p style={{ color: 'red' }}>{errors.last_name}</p>
                        </div>
                      </div>
                      <div className="col-lg-12 ">
                        <div className="form-group">
                          <input value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" name="email" id="email" className="form-control" required placeholder="Email" />
                          <p style={{ color: 'red' }}>{errors.email}</p>
                        </div>
                      </div>
                      <div className="col-lg-12 ">
                        <div className="form-group">
                          <input value={data.phone} onChange={(e) => setData('phone', e.target.value)} type="text" name="email" id="phone" className="form-control" required placeholder="Phone" />
                          <p style={{ color: 'red' }}>{errors.phone}</p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input value={data.password} onChange={(e) => setData('password', e.target.value)} className="form-control" type="password" name="password" placeholder="Password" />
                          <p style={{ color: 'red' }}>{errors.password}</p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} className="form-control" type="password" name="confirm_password" placeholder="Confirm Password" />
                          <p style={{ color: 'red' }}>{errors.password_confirmation}</p>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 text-center">
                        <button type="submit" className="default-btn">
                        Register Now
                        </button>
                      </div>
                      <div className="col-12 text-center">
                        <p className="account-desc">
                        Already have an account?
                          <a href="/login">Log In</a>
                        </p>
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

export default Register