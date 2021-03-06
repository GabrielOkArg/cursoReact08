import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {login, startGoogleLogin, startLoginEmailPassword} from '../../actions/auth'

export const LoginScreen = () => {

  const dispach = useDispatch();

  const[formValues,handleInputChange,reset]= useForm({
    email:'asd@gmail.com',
    password:'123456'
  });

  const {email,password} =  formValues;

  const handleLogin =(e)=>{
    e.preventDefault();
    dispach(startLoginEmailPassword(email,password))
    console.log(email,password)
  }

  const handleGoogleLogin=()=>{
    dispach(startGoogleLogin());
  }
  return (
    <div>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={formValues.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder='Password'
          name='password'
          className='auth__input'
          value={formValues.password}
          onChange={handleInputChange}
        />
        <button
         type='submit'
         className='btn btn-primary btn-block'
         >
          Login
        </button>
        <hr />
        <div className='auth__social-network'>
          <p>Login whith google</p>
          <div
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
          <Link to='/auth/register' className='link'>
            Create new acount
          </Link>
        </div>
      </form>
    </div>
  )
}
