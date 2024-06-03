import React from 'react'
import "./Styles/loginform.css";
const LoginForm = () => {
  return (
    <>
    <div className="login-form-container">
        <h2>Login Here</h2>
        <form action="" className='login-form'>
            <input type="email" placeholder='Enter your Email'/>
            <input type="password"  placeholder='Enter password'/>
            <input type="submit" />
        </form>
        <p className='signup-para'>Not a member? <span>Register now</span></p>
    </div>
    
    </>
  )
}

export default LoginForm
