import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Hero from '@/Components/Hero';

const Login = ({ message, status, canResetPassword }) => {
  // const { errors } = usePage().props

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });
  console.log(errors.email);
  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <GuestLayout>
      <Head title='Log In' />
      <Hero title="Log In" />

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
                    <div class="col-lg-12 form-condition">
                      <div class="agree-label">
                      <input checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} type="checkbox" id="chb1" />
                      <label for="chb1">
                      Remember Me <a class="forget" href={route('password.request')}>Forgot My Password?</a>
                      </label>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12 text-center">
                      <button type="submit" class="default-btn">
                      Log In Now
                      </button>
                    </div>
                    <div class="col-12">
                      <p class="account-desc text-center">
                      Not a member?
                      <a href="/register">Register</a>
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

export default Login