import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui'
import { startRegisterWhitEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);


  const [formValues, handleInputChange] = useForm({
    name: 'Gabriel',
    email: 'asd@asd.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWhitEmailPasswordName(email,password,name))
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Nombre requerido'))
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('esta mal el mail'))
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('pass esta mal'))
      return false;
    }
    dispatch(removeError())
    return true;
  }

  return (
    <div>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleRegister}>
        {
          msgError &&
          (<div className='auth__alert-error'>
            {msgError}
          </div>)
        }
        <input
          type="text"
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder='Confirm pass'
          name='password2'
          className='auth__input'
          value={password2}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='btn btn-primary btn-block mb-5'
        >
          Register
        </button>
        <hr />

        <Link to='auth/login' className='link'>
          Already register?
        </Link>
      </form>
    </div>
  )
}
