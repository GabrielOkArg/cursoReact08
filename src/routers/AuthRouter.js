import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';






export const AuthRouter = () => {

const {status} = useSelector(state=>state.auth)

useEffect(() => {
    onauth
}, []);


    return (
        <div className='auth__main'>
            <div className='auth__box-container'>
                <Switch>
                    <Route
                        exact
                        path="/auth/login" 
                        component={LoginScreen}
                    />
                    <Route
                        exact
                        path="/auth/register"
                        component={RegisterScreen}
                    />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>

        </div>
    )
}
