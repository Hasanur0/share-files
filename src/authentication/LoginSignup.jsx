import { useContext, useEffect, useState } from 'react'

import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import '../styles/dark_theme.css' // Ensure this path is correct
import useSignup from './useSignup'
import { useLogin } from './useLogin'
import Spinner from '../components/Spinner'
import SpinnerSmall from '../components/SpinnerSmall'

const LoginSignup = () => {
  const [fullName, setFullName] = useState('testname')
  const [email, setEmail] = useState('test@gmail.com')
  const [password, setPassword] = useState('test25')

  const { signup, isLoading: isSigningUp } = useSignup()
  const { login, isLoading: isLoggingIn } = useLogin()
  return (
    <div className="section absolute inset-0 z-10 bg-gray-200">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <form
                          id="login-form"
                          action="/api/login"
                          method="POST"
                          onSubmit={(e) => {
                            e.preventDefault()
                            console.log('object')
                            login({ email, password })
                          }}
                        >
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button type="submit" className="btn mt-4">
                            {isLoggingIn ? <SpinnerSmall /> : 'Login'}
                          </button>
                        </form>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <form
                          id="signup-form"
                          action="/api/register"
                          method="POST"
                          onSubmit={(e) => {
                            e.preventDefault()
                            signup({ fullName, email, password })
                          }}
                        >
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="logname"
                              autoComplete="off"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail2"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail2"
                              autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass2"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass2"
                              autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button type="submit" className="btn mt-4">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
